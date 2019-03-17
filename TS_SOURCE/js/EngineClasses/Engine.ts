class Engine {
    
    EditableFieldMetadata: { [id: string]: IEditable } = {
        Mass: {
            ApplyValueToDisplayElement: (e) => {
                e.innerHTML = `${this.Mass}t`;
            }
        }, Thrust: {
            ApplyValueToDisplayElement: (e) => {
                e.innerHTML = `${this.Thrust}kN`;
            }
        }, AtmIsp: {
            ApplyValueToDisplayElement: (e) => {
                e.innerHTML = `${this.AtmIsp}s`;
            }
        }, VacIsp: {
            ApplyValueToDisplayElement: (e) => {
                e.innerHTML = `${this.VacIsp}s`;
            }
        }, Cost: {
            ApplyValueToDisplayElement: (e) => {
                e.innerHTML = `${this.Cost}VF`;
            }
        }, MinThrust: {
            ApplyValueToDisplayElement: (e) => {
                e.innerHTML = `${this.MinThrust}%`;
            }
        }, AlternatorPower: {
            ApplyValueToDisplayElement: (e) => {
                e.innerHTML = `${this.AlternatorPower}kW`;
            }
        }
    }
    
    Active: boolean = false;
    ID: string = "New-Engine";
    Mass: number = 1;
    Thrust: number = 1000;
    AtmIsp: number = 250;
    VacIsp: number = 300;
    
    PropellantRatio: object = {}; //TODO: Ratios object (keep TankContents input in mind)
    FuelVolumeRatios: boolean = false; //Move to Ratios object?
    
    EngineSize: Dimensions = new Dimensions ();
    
    Cost: number = 1000;
    MinThrust: number = 90;
    Ignitions: number = 1;
    PressureFed: boolean = false;
    NeedsUllage: boolean = true;
    
    EnableTestFlight: boolean = false; //Create separate TestFlight object?
    RatedBurnTime: number = 180;
    StartReliability0: number = 92;
    StartReliability10k: number = 96;
    CycleReliability0: number = 90;
    CycleReliability10k: number = 98;
    
    AlternatorPower: number = 0;
    
    Gimbal: number = 6; //Create separate Gimbal object?
    AdvancedGimbal: boolean = false;
    GimbalNX: number = 30;
    GimbalPX: number = 30;
    GimbalNY: number = 0;
    GimbalPY: number = 0;
    
    ModelID: Model = Model.LR91; //Create visuals object?
    PlumeID: Plume = Plume.Kerolox_Upper;
    
    TechUnlockNode: TechNode = TechNode.start;
    
    EngineName: string = ""; //Create separate naming object?
    EngineManufacturer: string = "Generic Engines";
    EngineDescription: string = "This engine was generated by Generic Engines";
    
    EngineVariant: EngineType = EngineType.Liquid;
    
    UseTanks: boolean = false; //Create separate tank object?
    LimitTanks: boolean = true;
    TanksVolume: number = 0;
    TanksContents: object = {};
    ThrustCurve: [number, number][] = [];
    
    PolyType: Polymorphism = Polymorphism.Single;
    MasterEngineName: string = "";
    MasterEngineCost: number = 0;
    MasterEngineMass: number = 0;
    
    constructor () {
        
    }
}