type LineData = {
    Position?: number;
    Label?: string;
    Color?: string;
    Width?: number;
}

namespace CanvasHelper {
    const DEFAULT_STROKE_COLOR: string = "#444" as const;
    const DEFAULT_TEXT_COLOR: string = "#000" as const;
    const DEFAULT_STROKE_WIDTH: number = 1 as const;
    
    export const DrawLine = (
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        canvas: CanvasRenderingContext2D,
        color: string = DEFAULT_STROKE_COLOR,
        width: number = DEFAULT_STROKE_WIDTH
    ): void => {
        x1 = Math.round (x1 + 0.5) - 0.5;
        x2 = Math.round (x2 + 0.5) - 0.5;
        y1 = Math.round (y1 + 0.5) - 0.5;
        y2 = Math.round (y2 + 0.5) - 0.5;
        
        canvas.beginPath ();
        
        canvas.moveTo (x1, y1);
        canvas.lineTo (x2, y2);
        
        canvas.strokeStyle = color;
        canvas.lineWidth = width;
        canvas.lineCap = "square";
        canvas.stroke ();
    }
    
    export const DrawRectangle = (
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        canvas: CanvasRenderingContext2D,
        color: string = DEFAULT_STROKE_COLOR,
        width: number = DEFAULT_STROKE_WIDTH
    ): void => {
        DrawLine (x1, y1, x2, y1, canvas, color, width);
        DrawLine (x2, y1, x2, y2, canvas, color, width);
        DrawLine (x2, y2, x1, y2, canvas, color, width);
        DrawLine (x1, y2, x1, y1, canvas, color, width);
    }
    
    export const DrawGrid = (
        originX: number,
        originY: number,
        sizeX: number,
        sizeY: number,
        linesX: number,
        linesY: number,
        outline: boolean,
        canvas: CanvasRenderingContext2D,
        color: string = DEFAULT_STROKE_COLOR,
        textColor: string = DEFAULT_TEXT_COLOR,
        width: number = DEFAULT_STROKE_WIDTH,
        styleX?: { [num: string]: LineData | undefined },
        styleY?: { [num: string]: LineData | undefined },
        styleOutline?: LineData,
        labelX?: string,
        labelY?: string,
        lineOverrideX?: LineData[],
        lineOverrideY?: LineData[],
    ): void => {
        canvas.clearRect (0, 0, sizeX, sizeY);
        
        for (let x = 1; x <= linesX; ++x) {
            let currentX = originX + (x * (originX + sizeX) / (linesX + 1));
            let currentColor = color;
            let currentWidth = width;
            
            if (styleX && styleX[x] && styleX[x]!.Color) {
                currentColor = styleX[x]!.Color!;
            }
            
            if (styleX && styleX[x] && styleX[x]!.Width) {
                currentWidth = styleX[x]!.Width!;
            }
            
            if (styleX && styleX[x] && styleX[x]!.Label) {
                canvas.fillStyle = textColor;
                canvas.fillText (styleX[x]!.Label!, currentX + 1, originY + sizeY - 2, sizeX / (linesX + 1) - 2);
            }
            
            DrawLine (
                currentX,
                originY,
                currentX,
                originY + sizeY,
                canvas,
                currentColor,
                currentWidth,
            );
        }
        
        for (let y = 1; y <= linesY; ++y) {
            let currentY = originY + (y * (originY + sizeY) / (linesY + 1));
            let currentColor = color;
            let currentWidth = width;
            
            if (styleY && styleY[y] && styleY[y]!.Color) {
                currentColor = styleY[y]!.Color!;
            }
            
            if (styleY && styleY[y] && styleY[y]!.Width) {
                currentWidth = styleY[y]!.Width!;
            }
            
            if (styleY && styleY[y] && styleY[y]!.Label) {
                canvas.fillStyle = textColor;
                canvas.fillText (styleY[y]!.Label!, originX + 2, currentY - 1);
            }
            
            DrawLine (
                originX,
                currentY,
                originX + sizeX,
                currentY,
                canvas,
                currentColor,
                currentWidth,
            );
        }
        
        if (lineOverrideX) {
            lineOverrideX.forEach (l => {
                if (!l.Position && l.Position != 0) {
                    console.warn ("Position is mandatory for line override. Skipping...");
                    return; // continue;
                }
                
                let currentColor = color;
                let currentWidth = width;
                
                if (l.Color) {
                    currentColor = l.Color;
                }
                
                if (l.Width) {
                    currentWidth = l.Width;
                }
                
                if (l.Label) {
                    canvas.fillStyle = textColor;
                    canvas.fillText (l.Label!, l.Position + 1, sizeY - 1);
                }
                
                DrawLine (
                    l.Position, 0,
                    l.Position, sizeY,
                    canvas, currentColor, currentWidth
                );
            });
        }
        
        if (lineOverrideY) {
            lineOverrideY.forEach (l => {
                if (!l.Position && l.Position != 0) {
                    console.warn ("Position is mandatory for line override. Skipping...");
                    return; // continue;
                }
                
                let currentColor = color;
                let currentWidth = width;
                
                if (l.Color) {
                    currentColor = l.Color;
                }
                
                if (l.Width) {
                    currentWidth = l.Width;
                }
                
                if (l.Label) {
                    canvas.fillStyle = textColor;
                    canvas.fillText (l.Label!, 1, l.Position - 1);
                }
                
                DrawLine (
                    0, l.Position,
                    sizeX, l.Position,
                    canvas, currentColor, currentWidth
                );
            });
        }
        
        if (labelX) {
            canvas.textAlign = "end";
            
            canvas.fillStyle = textColor;
            canvas.fillText (labelX, originX + sizeX - 2, originY + sizeY - 2);
            
            canvas.textAlign = "start";
        }
        
        if (labelY) {
            canvas.textBaseline = "top";
            
            canvas.fillStyle = textColor;
            canvas.fillText (labelY, originX + 2, originY + 2);
            
            canvas.textBaseline = "alphabetic";
        }
        
        if (outline) {
            let currentColor = color;
            let currentWidth = width;
            
            // TS 3.7 can't come soon enough
            if (styleOutline && styleOutline.Color) {
                currentColor = styleOutline.Color;
            }
            
            if (styleOutline && styleOutline.Width) {
                currentWidth = styleOutline.Width;
            }
            
            DrawRectangle (
                originX,
                originY,
                originX + sizeX,
                originY + sizeY,
                canvas,
                currentColor,
                currentWidth
            );
        }
        
    }
    
}