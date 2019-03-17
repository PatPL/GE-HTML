class Dimensions implements IEditable {
    
    UseBaseWidth: boolean = true;
    Width: number = 1;
    Height: number = 2;
    
    public GetDisplayElement (): HTMLElement {
        let tmp = document.createElement ("div");
        tmp.classList.add ("content-cell-content");
        return tmp;
    }
    
    public ApplyValueToDisplayElement (e: HTMLElement): void {
        e.innerHTML = `${this.Width}m x ${this.Height}m`;
    }
    
    public GetEditElement (): HTMLElement {
        let tmp = document.createElement ("div");
        tmp.classList.add ("content-cell-content");
        tmp.style.height = "72px";
        tmp.style.padding = "0";
        
        let grid = document.createElement ("div");
        grid.style.display = "grid";
        grid.style.gridTemplateColumns = "60px auto 24px";
        grid.style.gridTemplateRows = "24px 24px 24px";
        grid.style.gridTemplateAreas = `
            "a a a"
            "b c d"
            "e f g"
        `;
        
        grid.innerHTML = `
            <div class="content-cell-content" style="grid-area: a;"></div>
            <div class="content-cell-content" style="grid-area: b;">Width</div>
            <div style="grid-area: c;"><input style="width: calc(100%);"></div>
            <div class="content-cell-content" style="grid-area: d;">m</div>
            <div class="content-cell-content" style="grid-area: e;">Height</div>
            <div style="grid-area: f;"><input style="width: calc(100%);"></div>
            <div class="content-cell-content" style="grid-area: g;">m</div>
        `;
        
        let checkboxLabel = document.createElement ("span");
        let checkbox = document.createElement ("input");
        
        checkboxLabel.style.position = "relative";
        checkboxLabel.style.top = "-4px";
        checkboxLabel.style.left = "4px";
        
        checkbox.type = "checkbox";
        checkboxLabel.innerHTML = checkbox.checked ? "Base width" : "Bell width";
        
        checkbox.addEventListener ("change", e => {
            checkboxLabel.innerHTML = checkbox.checked ? "Base width" : "Bell width";
        });
        
        grid.children[0].appendChild (checkbox);
        grid.children[0].appendChild (checkboxLabel);
        
        tmp.appendChild (grid);
        
        return tmp;
    }
    
    public ApplyValueToEditElement (e: HTMLElement): void {
        let inputs = e.querySelectorAll ("input");
        
        inputs[0].checked = this.UseBaseWidth;
        inputs[1].value = this.Width.toString ();
        inputs[2].value = this.Height.toString ();
    }
    
    ApplyChangesToValue (e: HTMLElement): void {
        let inputs = e.querySelectorAll ("input");
        
        this.UseBaseWidth = inputs[0].checked;
        this.Width = parseFloat (inputs[1].value);
        this.Height = parseFloat (inputs[2].value);
    }
    
}