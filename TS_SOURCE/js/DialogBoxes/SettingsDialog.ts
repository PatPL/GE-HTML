///<reference path="../Utilities/Store.ts" />
document.addEventListener ("DOMContentLoaded", () => {
    
    SettingsDialog.SettingsBoxElement = document.getElementById ("settings-box")!;
    
    SettingsDialog.SettingsBoxElement.querySelector ("div.fullscreen-grayout")!.addEventListener ("click", () => {
        SettingsDialog.Apply ();
    })
    
    document.getElementById ("settings-remove-all-autosaves")!.addEventListener ("click", () => {
        if (confirm ("Are you sure you want to permanently remove all autosaves?")) {
            for (let i in localStorage) {
                if (/.enl.autosave2$/.test (i)) {
                    localStorage.removeItem (i);
                }
            }
            
            SettingsDialog.RefreshLocalStorageUsage ();
            Notifier.Info ("All autosaves removed");
        }
    });
});

class SettingsDialog {
    
    public static SettingsBoxElement: HTMLElement;
    
    public static RefreshLocalStorageUsage () {
        document.getElementById ("settings-localStorage-usage-display")!.innerHTML = Debug_GetLocalStorageUsage ().toString ();
        document.getElementById ("settings-localStorage-autosave-usage-display")!.innerHTML = Debug_GetLocalStorageUsage (/.enl.autosave2$/).toString ();
    }
    
    public static Show () {
        let inputs = this.SettingsBoxElement.querySelectorAll ("input");
        
        inputs.forEach (i => {
            let field = i.getAttribute ("setting-field");
            
            if (field) {
                
                if (Settings[field] != undefined) {
                    if (typeof Settings[field] == "boolean") {
                        i.checked = Settings[field] as boolean;
                    } else if (typeof Settings[field] == "string") {
                        i.value = Settings[field] as string;
                    } else {
                        console.error ("Unsupported setting type");
                    }
                } else {
                    console.error ("Unknown setting field");
                }
            } else {
                return; //continue
            }
        });
        
        this.RefreshLocalStorageUsage ();
        
        FullscreenWindows["settings-box"].style.display = "flex";
    }
    
    public static Apply () {
        let inputs = this.SettingsBoxElement.querySelectorAll ("input");
        
        inputs.forEach (i => {
            let field = i.getAttribute ("setting-field");
            
            if (field) {
                
                if (Settings[field] != undefined) {
                    if (typeof Settings[field] == "boolean") {
                        Settings[field] = i.checked;
                    } else if (typeof Settings[field] == "string") {
                        Settings[field] = i.value;
                    } else {
                        console.error ("Unsupported setting type");
                    }
                } else {
                    console.error ("Unknown setting field");
                }
            } else {
                return; //continue
            }
        });
        
        //Update stuff
        ApplySettings ();
        MainEngineTable.RebuildTable ();
    }
    
}

const Settings: ISettings = {
    get classic_unit_display(): boolean {
        return Store.GetText ("setting:classic_unit_display", "0") == "1";
    }, set classic_unit_display(value: boolean) {
        Store.SetText ("setting:classic_unit_display", value ? "1" : "0");
    }, get dark_theme(): boolean {
        return Store.GetText ("setting:dark_theme", "0") == "1";
    }, set dark_theme(value: boolean) {
        Store.SetText ("setting:dark_theme", value ? "1" : "0");
    }, get show_info_panel(): boolean {
        return Store.GetText ("setting:show_info_panel", "1") == "1";
    }, set show_info_panel(value: boolean) {
        Store.SetText ("setting:show_info_panel", value ? "1" : "0");
    }, get prettify_config(): boolean {
        return Store.GetText ("setting:prettify_config", "0") == "1";
    }, set prettify_config(value: boolean) {
        Store.SetText ("setting:prettify_config", value ? "1" : "0");
    }, get hide_disabled_fields_on_sort(): boolean {
        return Store.GetText ("setting:hide_disabled_fields_on_sort", "1") == "1";
    }, set hide_disabled_fields_on_sort(value: boolean) {
        Store.SetText ("setting:hide_disabled_fields_on_sort", value ? "1" : "0");
    }, get current_theme(): string {
        return Store.GetText ("setting:current_theme", Settings.dark_theme ? "Dark (blue accent)" : "Classic");
    }, set current_theme(value: string) {
        Store.SetText ("setting:current_theme", value);
    }, get custom_theme(): string {
        return Store.GetText ("setting:custom_theme", btoa (JSON.stringify ([])));
    }, set custom_theme(value: string) {
        Store.SetText ("setting:custom_theme", value);
    }, get ignore_localstorage_usage(): boolean {
        return Store.GetText ("setting:ignore_localstorage_usage", "0") == "1";
    }, set ignore_localstorage_usage(value: boolean) {
        Store.SetText ("setting:ignore_localstorage_usage", value ? "1" : "0");
    }
}

// To add a setting, set it in the object above, the interface below, and in index.html, in '#settings-box' element

interface ISettings {
    [id: string]: string | boolean;
    classic_unit_display: boolean;
    dark_theme: boolean;
    show_info_panel: boolean;
    prettify_config: boolean;
    hide_disabled_fields_on_sort: boolean;
    current_theme: string;
    custom_theme: string;
    ignore_localstorage_usage: boolean;
}