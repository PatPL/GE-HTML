document.addEventListener ("DOMContentLoaded", () => {
    
    BrowserCacheDialog.DialogBoxElement = document.getElementById ("cache-box")!;
    
    document.querySelector ("#cache-box > div.fullscreen-grayout")!.addEventListener ("click", () => {
        BrowserCacheDialog.FinishTransaction (null);
    })
});

document.addEventListener ("keydown", e => {
    if (e.key == "Escape") {
        BrowserCacheDialog.FinishTransaction (null);
    }
});

class BrowserCacheDialog {
    
    public static DialogBoxElement: HTMLElement;
    private static CurrentTransaction: ((data: Uint8Array | null, name?: string) => void) | null;
    
    private static SetTransaction (transaction: (data: Uint8Array | null, name?: string) => void) {
        if (this.CurrentTransaction) {
            this.CurrentTransaction (null);
        }
        
        this.DialogBoxElement.style.display = "flex";
        this.CurrentTransaction = transaction;
    }
    
    public static FinishTransaction (message: Uint8Array | null, name?: string) {
        if (this.CurrentTransaction) {
            this.CurrentTransaction (message, name);
        }
        
        this.DialogBoxElement.style.display = "none";
        this.CurrentTransaction = null;
    }
    
    public static GetListFromCache (callback: (data: Uint8Array | null, name?: string) => void, message: string = "Browser cache") {
        this.SetTransaction (callback);
        
        this.DialogBoxElement.querySelector ("span")!.innerHTML = message;
        
        let container = document.getElementById ("cache-box-content")!;
        container.innerHTML = "";
        
        let lists: string[] = [];
        
        for (let i in localStorage) {
            if (/^(.)+\.enl$/.test (i)) {
                lists.push (i);
            }
        }
        
        lists = lists.sort ();
        
        lists.forEach (i => {
            let listItem = document.createElement ("div");
            listItem.classList.add ("option-button");
            
            listItem.addEventListener ("click", () => {
                this.FinishTransaction (Store.GetBinary (i), i.replace (/\.enl$/, ""));
            });
            
            listItem.title = i;
            listItem.innerHTML = i;
            container.appendChild (listItem);
        });
        
    }
    
    public static GetListFromAutosave (callback: (data: Uint8Array | null, name?: string) => void, message: string = "Browser cache") {
        this.SetTransaction (callback);
        
        this.DialogBoxElement.querySelector ("span")!.innerHTML = message;
        
        let container = document.getElementById ("cache-box-content")!;
        container.innerHTML = "";
        
        let lists: string[] = [];
        
        for (let i in localStorage) {
            if (/^(.)+\.enl.autosave2$/.test (i)) {
                lists.push (i);
            }
        }
        
        lists = lists.sort ((a, b) => a < b ? 1 : -1);
        
        lists.forEach (i => {
            let listItem = document.createElement ("div");
            listItem.classList.add ("option-button");
            
            listItem.addEventListener ("click", () => {
                // do not re-autosave this file
                Autosave.Enabled = false;
                
                this.FinishTransaction (Store.GetBinary (i), i.replace (/\.enl.autosave2$/, "").replace (/^[0-9]+-/, ""));
                
                Autosave.Enabled = true;
            });
            
            // [timestamp]-[name].enl.autosave2
            let tmp = i.replace (/\.enl.autosave2$/, "").split ("-");
            for (let i = 2; i < tmp.length; ++i) {
                // .split (limit) skips the rest of the string once it hits the limit
                // It needs to be reappended
                tmp[1] += `-${ tmp[i] }`;
            }
            tmp.length = 2;
            
            let time = new Date (parseInt (tmp[0]));
            listItem.title = `This file started being edited at ${ time.toLocaleString () } | ${ tmp[1] }`;
            listItem.innerHTML = `@${ time.toLocaleString () } | ${ tmp[1] }`;
            container.appendChild (listItem);
        });
        
    }
    
    public static DisplayCache (message: string = "Browser cache") {
        this.DialogBoxElement.style.display = "flex";
        this.DialogBoxElement.querySelector ("span")!.innerHTML = message;
        
        let container = document.getElementById ("cache-box-content")!;
        container.innerHTML = "";
        
        let lists: string[] = [];
        
        for (let i in localStorage) {
            if (/^(.)+\.enl$/.test (i)) {
                lists.push (i);
            }
        }
        
        lists = lists.sort ();
        
        lists.forEach (i => {
            let listItem = document.createElement ("div");
            listItem.title = i;
            listItem.innerHTML = i;
            
            let removeButton = document.createElement ("img");
            removeButton.src = "svg/button/remove-cache.svg";
            removeButton.title = "Remove this list from cache";
            removeButton.style.right = "0px";
            removeButton.classList.add ("option-button");
            removeButton.classList.add ("cache-option-button");
            removeButton.addEventListener ("click", () => {
                if (confirm (`You are going to delete ${i}\n\nAre you sure?`)) {
                    Store.Remove (i);
                    this.DisplayCache ();
                    Notifier.Info (`${i} deleted from cache`);
                }
            });
            listItem.appendChild (removeButton);
            
            let renameButton = document.createElement ("img");
            renameButton.src = "svg/button/rename-cache.svg";
            renameButton.title = "Rename this list";
            renameButton.style.right = "26px";
            renameButton.classList.add ("option-button");
            renameButton.classList.add ("cache-option-button");
            renameButton.addEventListener ("click", () => {
                let newName = prompt ("Enter a new name:", i.replace (/\.enl$/, ""));
                if (newName) {
                    newName = newName.replace (/\.enl$/, "");
                    newName += ".enl";
                    
                    if (Store.Exists (newName)) {
                        Notifier.Warn ("List with this name already exists. Choose a different name");
                        return;
                    }
                    
                    Store.Rename (i, newName);
                    this.DisplayCache ();
                }
            });
            listItem.appendChild (renameButton);
            
            let appendButton = document.createElement ("img");
            appendButton.src = "svg/button/append-cache.svg";
            appendButton.title = "Append this list";
            appendButton.style.right = "52px";
            appendButton.classList.add ("option-button");
            appendButton.classList.add ("cache-option-button");
            appendButton.addEventListener ("click", () => {
                
                let newEngines = Serializer.DeserializeMany (Store.GetBinary (i));
                newEngines.forEach (e => {
                    e.EngineList = MainEngineTable.Items;
                });
                
                MainEngineTable.AddItems (newEngines);
                
                this.DialogBoxElement.style.display = "none";
            });
            listItem.appendChild (appendButton);
            
            let openButton = document.createElement ("img");
            openButton.src = "svg/button/open-cache.svg";
            openButton.title = "Open this list";
            openButton.style.right = "78px";
            openButton.classList.add ("option-button");
            openButton.classList.add ("cache-option-button");
            openButton.addEventListener ("click", () => {
                if (MainEngineTable.Items.length == 0 || confirm ("All unsaved changes to this list will be lost.\n\nAre you sure you want to open a list from cache?")) {
                    ListNameDisplay.SetValue (i.replace (/\.enl$/, ""))
                    
                    // Disable autosave for a list that was just opened
                    Autosave.Enabled = false;
                    
                    MainEngineTable.Items = Serializer.DeserializeMany (Store.GetBinary (i));
                    MainEngineTable.Items.forEach (e => {
                        e.EngineList = MainEngineTable.Items;
                    });
                    MainEngineTable.RebuildTable ();
                    
                    Autosave.Enabled = true;
                    
                    this.DialogBoxElement.style.display = "none";
                }
            });
            listItem.appendChild (openButton);
            
            container.appendChild (listItem);
        });
    }
    
}