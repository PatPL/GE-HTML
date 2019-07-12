/// <reference path="../Enums/EngineGroupType.ts" />
class ModelInfo {
    
    public static GetModelInfo (id: Model) {
        return ModelInfo.models[id];
    }
    
    private static readonly models: IModelInfo[] = [
        { //Model.LR91
            OriginalHeight: 1.885,
            OriginalBellWidth: 0.9635,
            OriginalBaseWidth: 0.892,
            PlumeSizeMultiplier: 1.0,
            PlumePositionOffset: 0.8,
            NodeStackTop: 0.7215,
            NodeStackBottom: -1.1635,
            ModelPath: "GenericEngines/models/RealismOverhaul/LR-91eng",
            ModelFiles: [
                "files/models/RealismOverhaul/LR-91eng.mu",
                "files/models/RealismOverhaul/LR87diff.dds",
                "files/models/RealismOverhaul/LR87emis.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "LR91-5",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/LR91.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "HeatEmissiveAnimation"
            ]
        }, { //Model.AJ10
            OriginalHeight: 0.654,
            OriginalBellWidth: 0.285,
            OriginalBaseWidth: 0.395,
            PlumeSizeMultiplier: 0.295,
            PlumePositionOffset: -0.09,
            NodeStackTop: 0.33,
            NodeStackBottom: -0.324,
            ModelPath: "GenericEngines/models/SXT/AJ10/model",
            ModelFiles: [
                "files/models/SXT/AJ10/model.mu",
                "files/models/SXT/AJ10/fairing.dds",
                "files/models/SXT/AJ10/model000.dds",
                "files/models/SXT/AJ10/model001.dds"
            ],
            TextureDefinitions: `
                texture = fairing , Squad/Parts/Engine/liquidEngineLV-T45/model002
                texture = model000 , Squad/Parts/Engine/liquidEngineLV-T45/model000
                texture = model001 , Squad/Parts/Engine/liquidEngineLV-T45/model001
            `,
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "AJ10-142",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [
                "Cylinder_002"
            ],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/AJ10.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "aj10"
            ]
        }, { //Model.RS25
            OriginalHeight: 1.5,
            OriginalBellWidth: 0.865,
            OriginalBaseWidth: 0.989,
            PlumeSizeMultiplier: 0.85,
            PlumePositionOffset: -0.8,
            NodeStackTop: -0.025,
            NodeStackBottom: -1.525,
            ModelPath: "GenericEngines/models/VenStockRevamp/KS-25",
            ModelFiles: [
                "files/models/VenStockRevamp/KS-25.mu",
                "files/models/VenStockRevamp/RCS_CLR.dds",
                "files/models/VenStockRevamp/RCS_NRM.dds",
                "files/models/VenStockRevamp/Size3Engines_CLR.dds",
                "files/models/VenStockRevamp/Size3Engines_LUM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "Nozzle",
            ModelName: "RS-25",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [
                "Size2A"
            ],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/RS25.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.Thruster
            OriginalHeight: 0.3055,
            OriginalBellWidth: 0.12,
            OriginalBaseWidth: 0.222,
            PlumeSizeMultiplier: 0.11,
            PlumePositionOffset: -0.04,
            NodeStackTop: 0.0495,
            NodeStackBottom: -0.256,
            ModelPath: "GenericEngines/models/VenStockRevamp/LV-1B",
            ModelFiles: [
                "files/models/VenStockRevamp/LV-1B.mu",
                "files/models/VenStockRevamp/SmallEngines_CLR.dds",
                "files/models/VenStockRevamp/SmallEngines_LUM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "Gimbal",
            ModelName: "Generic thruster",
            ModelType: EngineGroupType.Fake,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/Thruster.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.Aestus
            OriginalHeight: 0.393,
            OriginalBellWidth: 0.234,
            OriginalBaseWidth: 0.616,
            PlumeSizeMultiplier: 0.225,
            PlumePositionOffset: -0.06,
            NodeStackTop: 0.0,
            NodeStackBottom: -0.393,
            ModelPath: "GenericEngines/models/VenStockRevamp/48-7S",
            ModelFiles: [
                "files/models/VenStockRevamp/48-7S.mu",
                "files/models/VenStockRevamp/SmallEngines_CLR.dds",
                "files/models/VenStockRevamp/SmallEngines_LUM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "Obj_Gimbal",
            ModelName: "Spark",
            ModelType: EngineGroupType.Fake,
            HiddenMuObjects: [
                "Size2A",
                "node_fairing_collider"
            ],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/Aestus.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "48-7SHeat"
            ]
        }, { //Model.IonThruster
            OriginalHeight: 0.3935,
            OriginalBellWidth: 0.459,
            OriginalBaseWidth: 0.627,
            PlumeSizeMultiplier: 0.42,
            PlumePositionOffset: 0,
            NodeStackTop: 0.1965,
            NodeStackBottom: -0.197,
            ModelPath: "GenericEngines/models/VenStockRevamp/IonEngine",
            ModelFiles: [
                "files/models/VenStockRevamp/IonEngine.mu",
                "files/models/VenStockRevamp/Ion_CLR.dds",
                "files/models/VenStockRevamp/Ion_LUM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "Ion thruster",
            ModelType: EngineGroupType.Ion,
            HiddenMuObjects: [
                "Size1B",
                "fairing"
            ],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/IonThruster.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "colorAnimation"
            ]
        }, { //Model.Rhino
            OriginalHeight: 4.48,
            OriginalBellWidth: 1.802,
            OriginalBaseWidth: 3.78,
            PlumeSizeMultiplier: 1.6,
            PlumePositionOffset: -0.7,
            NodeStackTop: 1.49,
            NodeStackBottom: -2.99,
            ModelPath: "GenericEngines/models/VenStockRevamp/KR-2L",
            ModelFiles: [
                "files/models/VenStockRevamp/KR-2L.mu",
                "files/models/VenStockRevamp/Size3Engines_CLR.dds",
                "files/models/VenStockRevamp/Size3Engines_LUM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "Nozzle",
            ModelName: "Rhino",
            ModelType: EngineGroupType.Fake,
            HiddenMuObjects: [
                "fairing"
            ],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/Rhino.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "HeatAnimationAdvancedEngine"
            ]
        }, { //Model.RD0105T
            OriginalHeight: 0.727,
            OriginalBellWidth: 0.445,
            OriginalBaseWidth: 0.989,
            PlumeSizeMultiplier: 0.4,
            PlumePositionOffset: -0.12,
            NodeStackTop: 0.195,
            NodeStackBottom: -0.532,
            OriginalTankVolume: 110,
            ModelPath: "GenericEngines/models/VenStockRevamp/LV900",
            ModelFiles: [
                "files/models/VenStockRevamp/LV900.mu",
                "files/models/VenStockRevamp/JebEngines_CLR.dds",
                "files/models/VenStockRevamp/JebEngines_LUM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "Obj_Gimbal",
            ModelName: "Beagle",
            ModelType: EngineGroupType.Fake,
            HiddenMuObjects: [
                "Size2B",
                "fairing",
                "Hoses"
            ],
            CanAttachOnModel: false,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/RD0105T.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "HeatAnimatioEmissiveLiquidEngine3"
            ]
        }, { //Model.SRBLong
            OriginalHeight: 8.018,
            OriginalBellWidth: 1.05265,
            OriginalBaseWidth: 1.276,
            PlumeSizeMultiplier: 1.1,
            PlumePositionOffset: -0.4,
            NodeStackTop: 3.89,
            NodeStackBottom: -4.128,
            RadialAttachmentPoint: 0.639,
            OriginalTankVolume: 6780,
            RadialAttachment: true,
            CanAttachOnModel: true,
            ModelPath: "GenericEngines/models/VenStockRevamp/BACC",
            ModelFiles: [
                "files/models/VenStockRevamp/BACC.mu",
                "files/models/VenStockRevamp/SolidBoosters_CLR.dds",
                "files/models/VenStockRevamp/SolidBoosters_LUM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "BACC",
            ModelType: EngineGroupType.SRB,
            HiddenMuObjects: [
                "fairing"
            ],
            ImageSource: "img/modelPreviews/SRBLong.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.RT5
            OriginalHeight: 1.444,
            OriginalBellWidth: 0.773,
            OriginalBaseWidth: 1.003,
            PlumeSizeMultiplier: 0.7,
            PlumePositionOffset: -0.18,
            NodeStackTop: 0.552,
            NodeStackBottom: -0.892,
            RadialAttachmentPoint: 0.503,
            OriginalTankVolume: 528,
            RadialAttachment: true,
            CanAttachOnModel: true,
            ModelPath: "GenericEngines/models/VenStockRevamp/RT5",
            ModelFiles: [
                "files/models/VenStockRevamp/RT5.mu",
                "files/models/VenStockRevamp/SolidBoosters_CLR.dds",
                "files/models/VenStockRevamp/SolidBoosters_LUM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "RT-5",
            ModelType: EngineGroupType.SRB,
            HiddenMuObjects: [
                "fairing"
            ],
            ImageSource: "img/modelPreviews/RT5.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "Flea"
            ]
        }, { //Model.RT2
            OriginalHeight: 3.5,
            OriginalBellWidth: 0.5945,
            OriginalBaseWidth: 0.613,
            PlumeSizeMultiplier: 0.55,
            PlumePositionOffset: -0.16,
            NodeStackTop: 1.8,
            NodeStackBottom: -1.7,
            RadialAttachmentPoint: 0.307,
            OriginalTankVolume: 640,
            RadialAttachment: true,
            CanAttachOnModel: true,
            ModelPath: "GenericEngines/models/VenStockRevamp/RT2",
            ModelFiles: [
                "files/models/VenStockRevamp/RT2.mu",
                "files/models/VenStockRevamp/NewSolidboosters_CLR.dds",
                "files/models/VenStockRevamp/NewSolidboosters_LUM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "RT-2",
            ModelType: EngineGroupType.SRB,
            HiddenMuObjects: [],
            ImageSource: "img/modelPreviews/RT2.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "RT-2"
            ]
        }, { //Model.S1
            OriginalHeight: 14.81,
            OriginalBellWidth: 1.043,
            OriginalBaseWidth: 1.183,
            PlumeSizeMultiplier: 1.1,
            PlumePositionOffset: 0.55,
            NodeStackTop: 7.445,
            NodeStackBottom: -7.365,
            RadialAttachmentPoint: 0.595,
            OriginalTankVolume: 11190,
            RadialAttachment: true,
            CanAttachOnModel: true,
            ModelPath: "GenericEngines/models/VenStockRevamp/S1",
            ModelFiles: [
                "files/models/VenStockRevamp/S1.mu",
                "files/models/VenStockRevamp/SolidBoosters_CLR.dds",
                "files/models/VenStockRevamp/SolidBoosters_LUM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform", //This model has separate Nozzle object but its origin is in wrong place :(
            ModelName: "S-1",
            ModelType: EngineGroupType.SRB,
            HiddenMuObjects: [],
            ImageSource: "img/modelPreviews/S1.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "HeatAnimationSRB"
            ]
        }, { //Model.RD0105
            OriginalHeight: 0.633,
            OriginalBellWidth: 0.445,
            OriginalBaseWidth: 0.991,
            PlumeSizeMultiplier: 0.4,
            PlumePositionOffset: -0.14,
            NodeStackTop: 0.193,
            NodeStackBottom: -0.44,
            ModelPath: "GenericEngines/models/VenStockRevamp/LV909",
            ModelFiles: [
                "files/models/VenStockRevamp/LV909.mu",
                "files/models/VenStockRevamp/JebEngines_CLR.dds",
                "files/models/VenStockRevamp/JebEngines_LUM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "Obj_Gimbal",
            ModelName: "LV-909",
            ModelType: EngineGroupType.Fake,
            HiddenMuObjects: [
                "fairing",
                "Size2B"
            ],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/RD0105.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "HeatAnimatioEmissiveLiquidEngine3"
            ]
        }, { //Model.NERVA
            OriginalHeight: 3.25,
            OriginalBellWidth: 0.996,
            OriginalBaseWidth: 1.245,
            PlumeSizeMultiplier: 0.9,
            PlumePositionOffset: 0.56,
            NodeStackTop: 1.414,
            NodeStackBottom: -1.836,
            ModelPath: "GenericEngines/models/VenStockRevamp/LVN",
            ModelFiles: [
                "files/models/VenStockRevamp/LVN.mu",
                "files/models/VenStockRevamp/JebEngines_CLR.dds",
                "files/models/VenStockRevamp/JebEngines_LUM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "NERVA",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [
                "fairingL",
                "fairingR",
                "Size2A"
            ],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/NERVA.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "overheat"
            ]
        }, { //Model.LVT30
            OriginalHeight: 1.574,
            OriginalBellWidth: 0.653,
            OriginalBaseWidth: 1.001,
            PlumeSizeMultiplier: 0.57,
            PlumePositionOffset: -0.1,
            NodeStackTop: 0.774,
            NodeStackBottom: -0.8,
            ModelPath: "GenericEngines/models/VenStockRevamp/LVT30",
            ModelFiles: [
                "files/models/VenStockRevamp/LVT30.mu",
                "files/models/VenStockRevamp/JebEngines_CLR.dds",
                "files/models/VenStockRevamp/JebEngines_LUM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "LV-T30",
            ModelType: EngineGroupType.Fake,
            HiddenMuObjects: [
                "fairing",
                "Size2A"
            ],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/LVT30.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "LVT30"
            ]
        }, { //Model.LVT45
            OriginalHeight: 1.643,
            OriginalBellWidth: 0.602,
            OriginalBaseWidth: 0.998,
            PlumeSizeMultiplier: 0.53,
            PlumePositionOffset: -0.16,
            NodeStackTop: 0.75,
            NodeStackBottom: -0.893,
            ModelPath: "GenericEngines/models/VenStockRevamp/LVT45",
            ModelFiles: [
                "files/models/VenStockRevamp/LVT45.mu",
                "files/models/VenStockRevamp/JebEngines_CLR.dds",
                "files/models/VenStockRevamp/JebEngines_LUM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "Obj_Gimbal",
            ModelName: "LV-T45",
            ModelType: EngineGroupType.Fake,
            HiddenMuObjects: [
                "fairing",
                "Size2A",
                "Cube_006_031_001"
            ],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/LVT45.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "LV45Heat"
            ]
        }, { //Model.P1057
            OriginalHeight: 0.615,
            OriginalBellWidth: 0.226,
            OriginalBaseWidth: 0.584,
            PlumeSizeMultiplier: 0.19,
            PlumePositionOffset: -0.075,
            NodeStackTop: 0.02,
            NodeStackBottom: -0.595,
            ModelPath: "GenericEngines/models/VenStockRevamp/105-7P",
            ModelFiles: [
                "files/models/VenStockRevamp/105-7P.mu",
                "files/models/VenStockRevamp/SmallEngines_CLR.dds",
                "files/models/VenStockRevamp/SmallEngines_LUM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "nozzle",
            ModelName: "105-7P",
            ModelType: EngineGroupType.Fake,
            HiddenMuObjects: [
                "Size2A",
                "node_fairing_collider"
            ],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/P1057.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "105-7PHeat"
            ]
        }, { //Model.OMSL
            OriginalHeight: 1.228,
            OriginalBellWidth: 0.773,
            OriginalBaseWidth: 0.653,
            PlumeSizeMultiplier: 0.72,
            PlumePositionOffset: -0.3,
            NodeStackTop: -0.012,
            NodeStackBottom: -1.24,
            ModelPath: "GenericEngines/models/VenStockRevamp/OMS-L",
            ModelFiles: [
                "files/models/VenStockRevamp/OMS-L.mu",
                "files/models/VenStockRevamp/RCS_CLR.dds",
                "files/models/VenStockRevamp/RCS_NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "Nozzle",
            ModelName: "OMS-L",
            ModelType: EngineGroupType.Fake,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/OMSL.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.Poodle
            OriginalHeight: 1.584,
            OriginalBellWidth: 1.222,
            OriginalBaseWidth: 1.196,
            PlumeSizeMultiplier: 1.12,
            PlumePositionOffset: 0.0,
            NodeStackTop: 0.722,
            NodeStackBottom: -0.862,
            ModelPath: "GenericEngines/models/VenStockRevamp/Poodle",
            ModelFiles: [
                "files/models/VenStockRevamp/Poodle.mu",
                "files/models/VenStockRevamp/RockoMaxEngines_CLR.dds",
                "files/models/VenStockRevamp/RockoMaxEngines_LUM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "Obj_Gimbal",
            ModelName: "Poodle",
            ModelType: EngineGroupType.Fake,
            HiddenMuObjects: [
                "Size2B",
                "fairing"
            ],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/Poodle.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "overheatService"
            ]
        }, { //Model.BallNuke
            OriginalHeight: 1.868,
            OriginalBellWidth: 0.886,
            OriginalBaseWidth: 2.5,
            PlumeSizeMultiplier: 0.82,
            PlumePositionOffset: -0.4,
            NodeStackTop: 0.0,
            NodeStackBottom: -1.868,
            ModelPath: "GenericEngines/models/VenStockRevamp/PoodleLargeNTR",
            ModelFiles: [
                "files/models/VenStockRevamp/PoodleLargeNTR.mu",
                "files/models/VenStockRevamp/RockoMaxEngines_CLR.dds",
                "files/models/VenStockRevamp/RockoMaxEngines_LUM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "Sphere NTR",
            ModelType: EngineGroupType.Fake,
            HiddenMuObjects: [
                "fairing"
            ],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/BallNuke.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "ShortNTR"
            ]
        }, { //Model.BallNukeS
            OriginalHeight: 0.767,
            OriginalBellWidth: 0.407,
            OriginalBaseWidth: 0.585,
            PlumeSizeMultiplier: 0.36,
            PlumePositionOffset: -0.03,
            NodeStackTop: 0.065,
            NodeStackBottom: -0.702,
            ModelPath: "GenericEngines/models/VenStockRevamp/PoodleNTR",
            ModelFiles: [
                "files/models/VenStockRevamp/PoodleNTR.mu",
                "files/models/VenStockRevamp/SmallEngines_CLR.dds",
                "files/models/VenStockRevamp/SmallEngines_LUM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "Small Sphere NTR",
            ModelType: EngineGroupType.Fake,
            HiddenMuObjects: [
                "Size1B",
                "fairing"
            ],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/BallNukeS.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "PoodleHeat"
            ]
        }, { //Model.Skipper
            OriginalHeight: 3.514,
            OriginalBellWidth: 1.6,
            OriginalBaseWidth: 2.504,
            PlumeSizeMultiplier: 1.45,
            PlumePositionOffset: -0.65,
            NodeStackTop: 1.19,
            NodeStackBottom: -2.324,
            ModelPath: "GenericEngines/models/VenStockRevamp/Size2MedEngineB",
            ModelFiles: [
                "files/models/VenStockRevamp/Size2MedEngineB.mu",
                "files/models/VenStockRevamp/RockoMaxEnginesB_CLR.dds",
                "files/models/VenStockRevamp/RockoMaxEnginesB_LUM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "Nozzle",
            ModelName: "Gas Generator",
            ModelType: EngineGroupType.Fake,
            HiddenMuObjects: [
                "fairing"
            ],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/Skipper.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "Size2MedEngineBEmmissive"
            ]
        }, { //Model.SkipperR
            OriginalHeight: 2.655,
            OriginalBellWidth: 1.415,
            OriginalBaseWidth: 1.225,
            PlumeSizeMultiplier: 1.3,
            PlumePositionOffset: 0.0,
            NodeStackTop: 0.007,
            NodeStackBottom: -2.648,
            ModelPath: "GenericEngines/models/VenStockRevamp/Skipper",
            ModelFiles: [
                "files/models/VenStockRevamp/Skipper.mu",
                "files/models/VenStockRevamp/RockoMaxEngines_CLR.dds",
                "files/models/VenStockRevamp/RockoMaxEngines_LUM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "Obj_Gimbal",
            ModelName: "Skipper",
            ModelType: EngineGroupType.Fake,
            HiddenMuObjects: [
                "obj_fairing",
                "Size2A"
            ],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/SkipperR.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "ksp_l_midrangeEngine_anim"
            ]
        }, { //Model.NERVA2
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 1.96,
            OriginalBaseWidth: 3.73,
            PlumeSizeMultiplier: 1.8,
            PlumePositionOffset: -1,
            NodeStackTop: 0.3,
            NodeStackBottom: -8.06,
            ModelPath: "GenericEngines/models/SXT/NERVA/model",
            ModelFiles: [
                "files/models/SXT/NERVA/model.mu",
                "files/models/SXT/NERVA/fairing.dds",
                "files/models/SXT/NERVA/model000.dds",
                "files/models/SXT/NERVA/model001_NRM.dds",
                "files/models/SXT/NERVA/model002.dds"
            ],
            TextureDefinitions: `
                texture = model000 , Squad/Parts/Engine/liquidEngineLV-N/model000
                texture = model001_NRM , Squad/Parts/Engine/liquidEngineLV-N/model001
                texture = model002 , Squad/Parts/Engine/liquidEngineLV-N/model002
                texture = fairing , Squad/Parts/Engine/liquidEngineLV-N/model003
            `,
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "NERVA 2",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [
                "fairing"
            ],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/NERVA2.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "nerva"
            ]
        }, { //Model.NERVAwide
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 2.074,
            OriginalBaseWidth: 2.895,
            PlumeSizeMultiplier: 1.8,
            PlumePositionOffset: -2,
            NodeStackTop: 0.05,
            NodeStackBottom: -5.74,
            ModelPath: "GenericEngines/models/SXT/NERVA/portlyman",
            ModelFiles: [
                "files/models/SXT/NERVA/portlyman.mu",
                "files/models/SXT/NERVA/fairing.dds",
                "files/models/SXT/NERVA/model000.dds",
                "files/models/SXT/NERVA/model001_NRM.dds",
                "files/models/SXT/NERVA/model002.dds"
            ],
            TextureDefinitions: `
                texture = model000 , Squad/Parts/Engine/liquidEngineLV-N/model000
                texture = model001_NRM , Squad/Parts/Engine/liquidEngineLV-N/model001	
                texture = model002 , Squad/Parts/Engine/liquidEngineLV-N/model002
                texture = fairing , Squad/Parts/Engine/liquidEngineLV-N/model003
            `,
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform", // No gimbal obj, and the thrust transform is below the engine, so gimballing makes the plume's origin change. :/
            ModelName: "NERVA wide",
            ModelType: EngineGroupType.Fake,
            HiddenMuObjects: [
                "fairing"
            ],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/NERVAwide.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "nerva"
            ]
        }, { //Model.Pancake
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.5,
            OriginalBaseWidth: 2,
            PlumeSizeMultiplier: 0.43,
            PlumePositionOffset: 0.13,
            NodeStackTop: 0,
            NodeStackBottom: -0.288,
            ModelPath: "GenericEngines/models/SXT/Kopo4e/model",
            ModelFiles: [
                "files/models/SXT/Kopo4e/model.mu",
                "files/models/SXT/Kopo4e/model000.dds",
                "files/models/SXT/Kopo4e/model002.dds"
            ],
            TextureDefinitions: `
                texture = model000 , Squad/Parts/Engine/liquidEngineSkipper/ksp_l_midrangeEngine_diff
                texture = model002 , Squad/Parts/Engine/liquidEngineSkipper/ksp_l_midrangeEngine_emissive
            `,
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "obj_gimbal",
            ModelName: "Pancake",
            ModelType: EngineGroupType.Fake,
            HiddenMuObjects: [],
            CanAttachOnModel: true,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/Pancake.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "kopo4e"
            ]
        }, { //Model.RT3
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.512, // The nozzle on the model is not centered, this is an approximation
                                      // https://github.com/linuxgurugamer/SXTContinued/issues/68
            OriginalBaseWidth: 1.25,
            PlumeSizeMultiplier: 0.44,
            PlumePositionOffset: 0.4,
            NodeStackTop: 0.594,
            NodeStackBottom: -0.75,
            ModelPath: "GenericEngines/models/SXT/KickMotor/model",
            ModelFiles: [
                "files/models/SXT/KickMotor/model.mu",
                "files/models/SXT/KickMotor/model000.dds",
                "files/models/SXT/KickMotor/model001.dds",
                "files/models/SXT/KickMotor/model002.dds"
            ],
            TextureDefinitions: `
                texture = model000 , Squad/Parts/Engine/solidBoosterBACC/model000
                texture = model002 , Squad/Parts/Engine/solidBoosterBACC/model002
            `,
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "RT-3",
            ModelType: EngineGroupType.Fake,
            HiddenMuObjects: [
                "solidBooster2_001"
            ],
            CanAttachOnModel: true,
            OriginalTankVolume: 607,
            RadialAttachment: true,
            RadialAttachmentPoint: 0.625,
            ImageSource: "img/modelPreviews/RT3.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "castoranim"
            ]
        }, { //Model.RD170
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 1.517,
            OriginalBaseWidth: 3.74,
            PlumeSizeMultiplier: 1.33,
            PlumePositionOffset: -0.25,
            NodeStackTop: 0.1,
            NodeStackBottom: -3.54,
            ModelPath: "GenericEngines/models/SXT/K170/model",
            ModelFiles: [
                "files/models/SXT/K170/model.mu",
                "files/models/SXT/K170/model000.dds",
                "files/models/SXT/K170/model001_NRM.dds",
                "files/models/SXT/K170/model002.dds"
            ],
            TextureDefinitions: `
                texture = model000 , Squad/Parts/Engine/liquidEngineSkipper/ksp_l_midrangeEngine_diff
                texture = model001_NRM , Squad/Parts/Engine/liquidEngineSkipper/ksp_l_midrangeEngine_normal
                texture = model002 , Squad/Parts/Engine/liquidEngineSkipper/ksp_l_midrangeEngine_emissive
            `,
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "obj_gimbal",
            ModelName: "RD-170",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/RD170.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "k170heat"
            ]
        }, { //Model.RD0120
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 1.671,
            OriginalBaseWidth: 2.548, // Off center -> https://github.com/linuxgurugamer/SXTContinued/issues/68
            PlumeSizeMultiplier: 1.45,
            PlumePositionOffset: -0.4,
            NodeStackTop: 0.7,
            NodeStackBottom: -1.92,
            ModelPath: "GenericEngines/models/SXT/K170/model25m",
            ModelFiles: [
                "files/models/SXT/K170/model25m.mu",
                "files/models/SXT/K170/fairing.dds",
                "files/models/SXT/K170/model000.dds",
                "files/models/SXT/K170/model001_NRM.dds",
                "files/models/SXT/K170/model002.dds"
            ],
            TextureDefinitions: `
                texture = model000 , Squad/Parts/Engine/liquidEngineSkipper/ksp_l_midrangeEngine_diff
                texture = model001_NRM , Squad/Parts/Engine/liquidEngineSkipper/ksp_l_midrangeEngine_normal
                texture = model002 , Squad/Parts/Engine/liquidEngineSkipper/ksp_l_midrangeEngine_emissive
                texture = fairing , Squad/Parts/Engine/liquidEngineLV-T45/model002
            `,
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "obj_gimbal",
            ModelName: "RD-0120 (Shroud)",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [
                "bottom"
            ],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/RD0120.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "25midenganim"
            ]
        }, { //Model.Gamma2
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.143,
            OriginalBaseWidth: 0.361,
            PlumeSizeMultiplier: 0.12,
            PlumePositionOffset: 0, // The bells are pointed outwards, so I'm not sure what to do.
            NodeStackTop: -0.034,
            NodeStackBottom: -0.49,
            ModelPath: "GenericEngines/models/SXT/BlackAdder/gamma2",
            ModelFiles: [
                "files/models/SXT/BlackAdder/gamma2.mu",
                "files/models/SXT/BlackAdder/model000.dds",
                "files/models/SXT/BlackAdder/model001.dds",
                "files/models/SXT/BlackAdder/fairing.dds"
            ],
            TextureDefinitions: `
                texture = model000 , Squad/Parts/Engine/liquidEngineLV-T45/model000
                texture = model001 , Squad/Parts/Engine/liquidEngineLV-T45/model001	
                texture = fairing , Squad/Parts/Engine/liquidEngineLV-T45/model002
            `,
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "Gamma 2",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [
                "bottom",
                "Cylinder" // Should look OK without the shroud
            ],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/Gamma2.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "blackadderheatanim"
            ]
        }, { //Model.Gamma8
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.142,
            OriginalBaseWidth: 1.031,
            PlumeSizeMultiplier: 0.10, // Thrust transform is not in the middle of the bell
            PlumePositionOffset: -0.05,
            NodeStackTop: 0,
            NodeStackBottom: -0.575,
            ModelPath: "GenericEngines/models/SXT/BlackAdder/model",
            ModelFiles: [
                "files/models/SXT/BlackAdder/model.mu",
                "files/models/SXT/BlackAdder/model000.dds",
                "files/models/SXT/BlackAdder/model001.dds"
            ],
            TextureDefinitions: `
                texture = model000 , Squad/Parts/Engine/liquidEngineLV-T45/model000
                texture = model001 , Squad/Parts/Engine/liquidEngineLV-T45/model001	
            `,
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "Gamma 8",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: true,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/Gamma8.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "blackadderheatanim"
            ]
        }, { //Model.AJ10_137
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 1.66,
            OriginalBaseWidth: 0.87,
            PlumeSizeMultiplier: 1.45,
            PlumePositionOffset: -0.5,
            NodeStackTop: 0.02,
            NodeStackBottom: -2.44,
            ModelPath: "GenericEngines/models/SSTU/AJ10-137/SC-ENG-AJ10-137",
            ModelFiles: [
                "files/models/SSTU/AJ10-137/SC-ENG-AJ10-137.mu",
                "files/models/SSTU/AJ10-137/SC-ENG-AJ10-137-DIFF.dds",
                "files/models/SSTU/AJ10-137/SC-ENG-AJ10-137-GLOW.dds",
                "files/models/SSTU/AJ10-137/SC-ENG-AJ10-137-NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "AJ10-137-ThrustTransform",
            GimbalTransformName: "AJ10-137-Bell",
            ModelName: "AJ10-137",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/AJ10_137.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.AJ10_190
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.707,
            OriginalBaseWidth: 0.366,
            PlumeSizeMultiplier: 0.61,
            PlumePositionOffset: -0.23,
            NodeStackTop: -0.001,
            NodeStackBottom: -1.25,
            ModelPath: "GenericEngines/models/SSTU/AJ10-190/SC-ENG-AJ10-190",
            ModelFiles: [
                "files/models/SSTU/AJ10-190/SC-ENG-AJ10-190.mu",
                "files/models/SSTU/AJ10-190/SC-ENG-AJ10-190-DIFF.dds",
                "files/models/SSTU/AJ10-190/SC-ENG-AJ10-190-GLOW.dds",
                "files/models/SSTU/AJ10-190/SC-ENG-AJ10-190-NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "AJ10-190-ThrustTransform",
            GimbalTransformName: "AJ10-190-GimbalYRing",
            ModelName: "AJ10-190",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/AJ10_190.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.F1
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 2.446,
            OriginalBaseWidth: 2.017,
            PlumeSizeMultiplier: 2.1,
            PlumePositionOffset: -0.7,
            NodeStackTop: -0.01,
            NodeStackBottom: -4.1,
            ModelPath: "GenericEngines/models/SSTU/F1/SC-ENG-F1",
            ModelFiles: [
                "files/models/SSTU/F1/SC-ENG-F1.mu",
                "files/models/SSTU/F1/SC-ENG-F1-DIFF.dds",
                "files/models/SSTU/F1/SC-ENG-F1-GLOW.dds",
                "files/models/SSTU/F1/SC-ENG-F1-NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "F1-ThrustTransform",
            GimbalTransformName: "F1-Bell",
            ModelName: "F-1",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/F1.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.F1B
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 2.165,
            OriginalBaseWidth: 2.007,
            PlumeSizeMultiplier: 1.86,
            PlumePositionOffset: -0.6,
            NodeStackTop: -0.0075,
            NodeStackBottom: -3.25,
            ModelPath: "GenericEngines/models/SSTU/F1B/SC-ENG-F1B",
            ModelFiles: [
                "files/models/SSTU/F1B/SC-ENG-F1B.mu",
                "files/models/SSTU/F1B/SC-ENG-F1B-DIFF.dds",
                "files/models/SSTU/F1B/SC-ENG-F1B-GLOW.dds",
                "files/models/SSTU/F1B/SC-ENG-F1B-NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "F1B-ThrustTransform",
            GimbalTransformName: "F1B-Bell",
            ModelName: "F-1B",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/F1B.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.H1
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.757,
            OriginalBaseWidth: 0.97,
            PlumeSizeMultiplier: 0.66,
            PlumePositionOffset: -0.3,
            NodeStackTop: -0.005,
            NodeStackBottom: -1.68,
            ModelPath: "GenericEngines/models/SSTU/H-1/SC-ENG-H-1",
            ModelFiles: [
                "files/models/SSTU/H-1/SC-ENG-H-1.mu",
                "files/models/SSTU/H-1/SC-ENG-H-1-DIFF.dds",
                "files/models/SSTU/H-1/SC-ENG-H-1-GLOW.dds",
                "files/models/SSTU/H-1/SC-ENG-H-1-NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "H-1-ThrustTransform",
            GimbalTransformName: "H-1-Bell",
            ModelName: "H-1",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/H1.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.J2
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 1.332,
            OriginalBaseWidth: 0.841,
            PlumeSizeMultiplier: 1.2,
            PlumePositionOffset: -0.42,
            NodeStackTop: -0.01,
            NodeStackBottom: -2.1,
            ModelPath: "GenericEngines/models/SSTU/J-2/SC-ENG-J-2",
            ModelFiles: [
                "files/models/SSTU/J-2/SC-ENG-J-2.mu",
                "files/models/SSTU/J-2/SC-ENG-J-2-DIFF.dds",
                "files/models/SSTU/J-2/SC-ENG-J-2-GLOW.dds",
                "files/models/SSTU/J-2/SC-ENG-J-2-NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "J-2-ThrustTransform",
            GimbalTransformName: "J-2-Bell",
            ModelName: "J-2",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/J2.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.J2X
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 1.943,
            OriginalBaseWidth: 1.575,
            PlumeSizeMultiplier: 1.75,
            PlumePositionOffset: -0.7,
            NodeStackTop: -0.02,
            NodeStackBottom: -3.22,
            ModelPath: "GenericEngines/models/SSTU/J-2X/SC-ENG-J-2X",
            ModelFiles: [
                "files/models/SSTU/J-2X/SC-ENG-J-2X.mu",
                "files/models/SSTU/J-2X/SC-ENG-J-2X-DIFF.dds",
                "files/models/SSTU/J-2X/SC-ENG-J-2X-GLOW.dds",
                "files/models/SSTU/J-2X/SC-ENG-J-2X-NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "J-2X-ThrustTransform",
            GimbalTransformName: "J-2X-Bell",
            ModelName: "J-2X",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/J2X.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.LMAE
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.512,
            OriginalBaseWidth: 0.303,
            PlumeSizeMultiplier: 0.43,
            PlumePositionOffset: -0.15,
            NodeStackTop: -0.005,
            NodeStackBottom: -0.86,
            ModelPath: "GenericEngines/models/SSTU/LM/SC-ENG-LMAE",
            ModelFiles: [
                "files/models/SSTU/LM/SC-ENG-LMAE.mu",
                "files/models/SSTU/LM/SC-ENG-LM-DIFF.dds",
                "files/models/SSTU/LM/SC-ENG-LM-GLOW.dds",
                "files/models/SSTU/LM/SC-ENG-LM-NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "LMAE-ThrustTransform",
            GimbalTransformName: "LMAE-ThrustTransform",
            ModelName: "Lunar Module Ascent Engine",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/LMAE.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.LMDE
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.904,
            OriginalBaseWidth: 0.612,
            PlumeSizeMultiplier: 0.8,
            PlumePositionOffset: -0.3,
            NodeStackTop: -0.01,
            NodeStackBottom: -1.5,
            ModelPath: "GenericEngines/models/SSTU/LM/SC-ENG-LMDE",
            ModelFiles: [
                "files/models/SSTU/LM/SC-ENG-LMDE.mu",
                "files/models/SSTU/LM/SC-ENG-LM-DIFF.dds",
                "files/models/SSTU/LM/SC-ENG-LM-GLOW.dds",
                "files/models/SSTU/LM/SC-ENG-LM-NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "LMDE-ThrustTransform",
            GimbalTransformName: "LMDE-GimbalFrame",
            ModelName: "Lunar Module Descent Engine",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/LMDE.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.Bell8048
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.412,
            OriginalBaseWidth: 0.838,
            PlumeSizeMultiplier: 0.35,
            PlumePositionOffset: -0.12,
            NodeStackTop: -0.005,
            NodeStackBottom: -1.18,
            ModelPath: "GenericEngines/models/SSTU/LR-81/SC-ENG-LR-81-8048",
            ModelFiles: [
                "files/models/SSTU/LR-81/SC-ENG-LR-81-8048.mu",
                "files/models/SSTU/LR-81/SC-ENG-LR-81-DIFF.dds",
                "files/models/SSTU/LR-81/SC-ENG-LR-81-GLOW.dds",
                "files/models/SSTU/LR-81/SC-ENG-LR-81-NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "LR-81-8048-ThrustTransform",
            GimbalTransformName: "LR-81-8048-Gimbal",
            ModelName: "Bell 8048",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/Bell8048.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.Bell8096
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.611,
            OriginalBaseWidth: 0.838,
            PlumeSizeMultiplier: 0.53,
            PlumePositionOffset: -0.22,
            NodeStackTop: -0.005,
            NodeStackBottom: -1.46,
            ModelPath: "GenericEngines/models/SSTU/LR-81/SC-ENG-LR-81-8096",
            ModelFiles: [
                "files/models/SSTU/LR-81/SC-ENG-LR-81-8096.mu",
                "files/models/SSTU/LR-81/SC-ENG-LR-81-DIFF.dds",
                "files/models/SSTU/LR-81/SC-ENG-LR-81-GLOW.dds",
                "files/models/SSTU/LR-81/SC-ENG-LR-81-NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "LR-81-8096-ThrustTransform",
            GimbalTransformName: "LR-81-8096-Gimbal",
            ModelName: "Bell 8096",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/Bell8096.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.Merlin1A
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.597,
            OriginalBaseWidth: 0.74,
            PlumeSizeMultiplier: 0.53,
            PlumePositionOffset: -0.18,
            NodeStackTop: -0.015,
            NodeStackBottom: -1.3,
            ModelPath: "GenericEngines/models/SSTU/Merlin-1/SC-ENG-Merlin-1A",
            ModelFiles: [
                "files/models/SSTU/Merlin-1/SC-ENG-Merlin-1A.mu",
                "files/models/SSTU/Merlin-1/SC-ENG-Merlin-DIFF.dds",
                "files/models/SSTU/Merlin-1/SC-ENG-Merlin-GLOW.dds",
                "files/models/SSTU/Merlin-1/SC-ENG-Merlin-NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "Merlin-1A-ThrustTransform",
            GimbalTransformName: "Merlin-1A-Bell",
            ModelName: "Merlin 1A",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/Merlin1A.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.MerlinB
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.599,
            OriginalBaseWidth: 0.73,
            PlumeSizeMultiplier: 0.54,
            PlumePositionOffset: -0.18,
            NodeStackTop: -0.015,
            NodeStackBottom: -1.39,
            ModelPath: "GenericEngines/models/SSTU/Merlin-1/SC-ENG-Merlin-1B",
            ModelFiles: [
                "files/models/SSTU/Merlin-1/SC-ENG-Merlin-1B.mu",
                "files/models/SSTU/Merlin-1/SC-ENG-Merlin-DIFF.dds",
                "files/models/SSTU/Merlin-1/SC-ENG-Merlin-GLOW.dds",
                "files/models/SSTU/Merlin-1/SC-ENG-Merlin-NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "Merlin-1B-ThrustTransform",
            GimbalTransformName: "Merlin-1B-Bell",
            ModelName: "Merlin 1B",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/Merlin1B.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.Merlin1BV
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 1.599,
            OriginalBaseWidth: 0.73,
            PlumeSizeMultiplier: 1.4,
            PlumePositionOffset: -0.66,
            NodeStackTop: -0.015,
            NodeStackBottom: -2.87,
            ModelPath: "GenericEngines/models/SSTU/Merlin-1/SC-ENG-Merlin-1BV",
            ModelFiles: [
                "files/models/SSTU/Merlin-1/SC-ENG-Merlin-1BV.mu",
                "files/models/SSTU/Merlin-1/SC-ENG-Merlin-DIFF.dds",
                "files/models/SSTU/Merlin-1/SC-ENG-Merlin-GLOW.dds",
                "files/models/SSTU/Merlin-1/SC-ENG-Merlin-NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "Merlin-1BV-ThrustTransform",
            GimbalTransformName: "Merlin-1BV-Bell",
            ModelName: "Merlin 1B Vacuum",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/Merlin1BV.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.Merlin1D
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.601,
            OriginalBaseWidth: 0.73,
            PlumeSizeMultiplier: 0.53,
            PlumePositionOffset: -0.2,
            NodeStackTop: -0.015,
            NodeStackBottom: -1.39,
            ModelPath: "GenericEngines/models/SSTU/Merlin-1/SC-ENG-Merlin-1D",
            ModelFiles: [
                "files/models/SSTU/Merlin-1/SC-ENG-Merlin-1D.mu",
                "files/models/SSTU/Merlin-1/SC-ENG-Merlin-DIFF.dds",
                "files/models/SSTU/Merlin-1/SC-ENG-Merlin-GLOW.dds",
                "files/models/SSTU/Merlin-1/SC-ENG-Merlin-NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "Merlin-1D-ThrustTransform",
            GimbalTransformName: "Merlin-1D-Bell",
            ModelName: "Merlin 1D",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/Merlin1D.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.Merlin1DV
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 1.601,
            OriginalBaseWidth: 0.73,
            PlumeSizeMultiplier: 1.4,
            PlumePositionOffset: -0.5,
            NodeStackTop: -0.015,
            NodeStackBottom: -2.88,
            ModelPath: "GenericEngines/models/SSTU/Merlin-1/SC-ENG-Merlin-1DV",
            ModelFiles: [
                "files/models/SSTU/Merlin-1/SC-ENG-Merlin-1DV.mu",
                "files/models/SSTU/Merlin-1/SC-ENG-Merlin-DIFF.dds",
                "files/models/SSTU/Merlin-1/SC-ENG-Merlin-GLOW.dds",
                "files/models/SSTU/Merlin-1/SC-ENG-Merlin-NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "Merlin-1DV-ThrustTransform",
            GimbalTransformName: "Merlin-1DV-Bell",
            ModelName: "Merlin 1D Vacuum",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/Merlin1DV.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.RD107
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.471,
            OriginalBaseWidth: 1.235,
            PlumeSizeMultiplier: 0.42,
            PlumePositionOffset: -0.145,
            NodeStackTop: -0.0075,
            NodeStackBottom: -1.78,
            ModelPath: "GenericEngines/models/SSTU/RD-107/SC-ENG-RD-107X",
            ModelFiles: [
                "files/models/SSTU/RD-107/SC-ENG-RD-107X.mu",
                "files/models/SSTU/RD-107/SC-ENG-RD-107-DIFF.dds",
                "files/models/SSTU/RD-107/SC-ENG-RD-107-GLOW.dds",
                "files/models/SSTU/RD-107/SC-ENG-RD-107-NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "RD-107X-ThrustTransform",
            GimbalTransformName: "RD-107X-ThrustTransform",
            ModelName: "RD-107",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/RD107.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.RD171
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.964,
            OriginalBaseWidth: 2.49,
            PlumeSizeMultiplier: 0.85,
            PlumePositionOffset: -0.3,
            NodeStackTop: -0.01,
            NodeStackBottom: -2.41,
            ModelPath: "GenericEngines/models/SSTU/RD-180/SC-ENG-RD-171",
            ModelFiles: [
                "files/models/SSTU/RD-180/SC-ENG-RD-171.mu",
                "files/models/SSTU/RD-180/SC-ENG-RD-180-DIFF.dds",
                "files/models/SSTU/RD-180/SC-ENG-RD-180-GLOW.dds",
                "files/models/SSTU/RD-180/SC-ENG-RD-180-NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "RD-171-ThrustTransform",
            GimbalTransformName: "RD-171-GimbalRing",
            ModelName: "RD-171",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/RD171.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.RD180
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.963,
            OriginalBaseWidth: 2.237,
            PlumeSizeMultiplier: 0.85,
            PlumePositionOffset: -0.3,
            NodeStackTop: -0.001,
            NodeStackBottom: -2.41,
            ModelPath: "GenericEngines/models/SSTU/RD-180/SC-ENG-RD-180",
            ModelFiles: [
                "files/models/SSTU/RD-180/SC-ENG-RD-180.mu",
                "files/models/SSTU/RD-180/SC-ENG-RD-180-DIFF.dds",
                "files/models/SSTU/RD-180/SC-ENG-RD-180-GLOW.dds",
                "files/models/SSTU/RD-180/SC-ENG-RD-180-NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "RD-180-ThrustTransform",
            GimbalTransformName: "RD-180-GimbalRing",
            ModelName: "RD-180",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/RD180.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.RD181
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.964,
            OriginalBaseWidth: 1.67,
            PlumeSizeMultiplier: 0.85,
            PlumePositionOffset: -0.27,
            NodeStackTop: -0.001,
            NodeStackBottom: -2.41,
            ModelPath: "GenericEngines/models/SSTU/RD-180/SC-ENG-RD-181",
            ModelFiles: [
                "files/models/SSTU/RD-180/SC-ENG-RD-181.mu",
                "files/models/SSTU/RD-180/SC-ENG-RD-180-DIFF.dds",
                "files/models/SSTU/RD-180/SC-ENG-RD-180-GLOW.dds",
                "files/models/SSTU/RD-180/SC-ENG-RD-180-NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "RD-181-ThrustTransform",
            GimbalTransformName: "RD-181-GimbalRing",
            ModelName: "RD-181",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/RD181.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.RL10A3
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.671,
            OriginalBaseWidth: 0.568,
            PlumeSizeMultiplier: 0.6,
            PlumePositionOffset: -0.145,
            NodeStackTop: -0.005,
            NodeStackBottom: -1.14,
            ModelPath: "GenericEngines/models/SSTU/RL10/SC-ENG-RL10A-3",
            ModelFiles: [
                "files/models/SSTU/RL10/SC-ENG-RL10A-3.mu",
                "files/models/SSTU/RL10/SC-ENG-RL10-DIFF.dds",
                "files/models/SSTU/RL10/SC-ENG-RL10-GLOW.dds",
                "files/models/SSTU/RL10/SC-ENG-RL10-NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "RL10A-3-ThrustTransform",
            GimbalTransformName: "RL10A-3-Bell",
            ModelName: "RL10A-3",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/RL10A3.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.RL10A4
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.798,
            OriginalBaseWidth: 0.568,
            PlumeSizeMultiplier: 0.71,
            PlumePositionOffset: -0.27,
            NodeStackTop: -0.01,
            NodeStackBottom: -1.49,
            ModelPath: "GenericEngines/models/SSTU/RL10/SC-ENG-RL10A-4",
            ModelFiles: [
                "files/models/SSTU/RL10/SC-ENG-RL10A-4.mu",
                "files/models/SSTU/RL10/SC-ENG-RL10-DIFF.dds",
                "files/models/SSTU/RL10/SC-ENG-RL10-GLOW.dds",
                "files/models/SSTU/RL10/SC-ENG-RL10-NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "RL10A-4-ThrustTransform",
            GimbalTransformName: "RL10A-4-Bell",
            ModelName: "RL10A-4",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/RL10A4.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.RL10A5
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.25,
            OriginalBaseWidth: 0.568,
            PlumeSizeMultiplier: 0.22,
            PlumePositionOffset: -0.1,
            NodeStackTop: -0.005,
            NodeStackBottom: -0.75,
            ModelPath: "GenericEngines/models/SSTU/RL10/SC-ENG-RL10A-5",
            ModelFiles: [
                "files/models/SSTU/RL10/SC-ENG-RL10A-5.mu",
                "files/models/SSTU/RL10/SC-ENG-RL10-DIFF.dds",
                "files/models/SSTU/RL10/SC-ENG-RL10-GLOW.dds",
                "files/models/SSTU/RL10/SC-ENG-RL10-NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "RL10A-5-ThrustTransform",
            GimbalTransformName: "RL10A-5-Bell",
            ModelName: "RL10A-5",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/RL10A5.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.RL10B2
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 1.27,
            OriginalBaseWidth: 0.568,
            PlumeSizeMultiplier: 1.13,
            PlumePositionOffset: -0.5,
            NodeStackTop: -0.005,
            NodeStackBottom: -2.56,
            ModelPath: "GenericEngines/models/SSTU/RL10/SC-ENG-RL10B-2",
            ModelFiles: [
                "files/models/SSTU/RL10/SC-ENG-RL10B-2.mu",
                "files/models/SSTU/RL10/SC-ENG-RL10-DIFF.dds",
                "files/models/SSTU/RL10/SC-ENG-RL10-GLOW.dds",
                "files/models/SSTU/RL10/SC-ENG-RL10-NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "RL10B-2-ThrustTransform",
            GimbalTransformName: "RL10B-2-Bell",
            ModelName: "RL10B-2",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/RL10B2.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.RS25_2
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 1.569,
            OriginalBaseWidth: 1.373,
            PlumeSizeMultiplier: 1.4,
            PlumePositionOffset: -0.5,
            NodeStackTop: -0.005,
            NodeStackBottom: -2.7,
            ModelPath: "GenericEngines/models/SSTU/RS-25/SC-ENG-RS-25",
            ModelFiles: [
                "files/models/SSTU/RS-25/SC-ENG-RS-25.mu",
                "files/models/SSTU/RS-25/SC-ENG-RS-25-DIFF.dds",
                "files/models/SSTU/RS-25/SC-ENG-RS-25-GLOW.dds",
                "files/models/SSTU/RS-25/SC-ENG-RS-25-NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "RS-25-ThrustTransform",
            GimbalTransformName: "RS-25-Bell",
            ModelName: "RS-25",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/RS25_2.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.RS68
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 1.61,
            OriginalBaseWidth: 2.272,
            PlumeSizeMultiplier: 1.43,
            PlumePositionOffset: -0.6,
            NodeStackTop: -0.01,
            NodeStackBottom: -3.6,
            ModelPath: "GenericEngines/models/SSTU/RS-68/SC-ENG-RS-68",
            ModelFiles: [
                "files/models/SSTU/RS-68/SC-ENG-RS-68.mu",
                "files/models/SSTU/RS-68/SC-ENG-RS-68-DIFF.dds",
                "files/models/SSTU/RS-68/SC-ENG-RS-68-GLOW.dds",
                "files/models/SSTU/RS-68/SC-ENG-RS-68-NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "RS-68-ThrustTransform",
            GimbalTransformName: "RS-68-Bell",
            ModelName: "RS-68",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/RS68.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.SuperDraco
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.128,
            OriginalBaseWidth: 0.09,
            PlumeSizeMultiplier: 0.11,
            PlumePositionOffset: 0.03,
            NodeStackTop: -0.005,
            NodeStackBottom: -0.365,
            ModelPath: "GenericEngines/models/SSTU/SuperDraco/SC-ENG-SuperDraco",
            ModelFiles: [
                "files/models/SSTU/SuperDraco/SC-ENG-SuperDraco.mu",
                "files/models/SSTU/SuperDraco/SC-ENG-SuperDraco-DIFF.dds",
                "files/models/SSTU/SuperDraco/SC-ENG-SuperDraco-GLOW.png"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "SuperDraco-ThrustTransform",
            GimbalTransformName: "SuperDraco-ThrustTransform",
            ModelName: "SuperDraco",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/SuperDraco.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.SuperDracoV
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.321,
            OriginalBaseWidth: 0.09,
            PlumeSizeMultiplier: 0.29,
            PlumePositionOffset: 0.2,
            NodeStackTop: -0.005,
            NodeStackBottom: -0.615,
            ModelPath: "GenericEngines/models/SSTU/SuperDraco/SC-ENG-SuperDraco-L",
            ModelFiles: [
                "files/models/SSTU/SuperDraco/SC-ENG-SuperDraco-L.mu",
                "files/models/SSTU/SuperDraco/SC-ENG-SuperDraco-DIFF.dds",
                "files/models/SSTU/SuperDraco/SC-ENG-SuperDraco-GLOW.png"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "SuperDraco-L-ThrustTransform",
            GimbalTransformName: "SuperDraco-L-ThrustTransform",
            ModelName: "SuperDraco Vacuum",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/SuperDracoV.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.FRE1
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.824,
            OriginalBaseWidth: 0.824,
            PlumeSizeMultiplier: 0.72,
            PlumePositionOffset: 0,
            NodeStackTop: 1,
            NodeStackBottom: -0.533,
            ModelPath: "GenericEngines/models/FRE/FRE-1/FRE-1",
            ModelFiles: [
                "files/models/FRE/FRE-1/FRE-1.mu",
                "files/models/FRE/FRE-1/FRE-1Texture_Compiled.dds",
                "files/models/FRE/FRE-1/FRE-1TextureEmissive.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "gimbalTransform",
            ModelName: "FRE-1",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/FRE1.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "FRE-1Heat"
            ]
        }, { //Model.FRE2
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.38,
            OriginalBaseWidth: 1.824,
            PlumeSizeMultiplier: 0.33,
            PlumePositionOffset: 0,
            NodeStackTop: 0.59,
            NodeStackBottom: -0.7,
            ModelPath: "GenericEngines/models/FRE/FRE-2/FRE-2",
            ModelFiles: [
                "files/models/FRE/FRE-2/FRE-2.mu",
                "files/models/FRE/FRE-2/FRE-2Texture_Compiled.dds",
                "files/models/FRE/FRE-2/FRE-2TextureEmissive.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "FRE-2",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/FRE2.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.LE5
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 1.517,
            OriginalBaseWidth: 0.72,
            PlumeSizeMultiplier: 1.35,
            PlumePositionOffset: 0.6,
            NodeStackTop: 1.52,
            NodeStackBottom: -1.2,
            ModelPath: "GenericEngines/models/FRE/LE-5/LE-5",
            ModelFiles: [
                "files/models/FRE/LE-5/LE-5.mu",
                "files/models/FRE/LE-5/LE-5Bump_NRM.dds",
                "files/models/FRE/LE-5/LE-5Emissive.dds",
                "files/models/FRE/LE-5/LE-5Texture_Compiled.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "gimbalTransform",
            ModelName: "LE-5",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/LE5.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "LE-5Heat"
            ]
        }, { //Model.LE7
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 2.12,
            OriginalBaseWidth: 1.164,
            PlumeSizeMultiplier: 1.85,
            PlumePositionOffset: 0.3,
            NodeStackTop: 2.1,
            NodeStackBottom: -1.3,
            ModelPath: "GenericEngines/models/FRE/LE-7/LE-7",
            ModelFiles: [
                "files/models/FRE/LE-7/LE-7.mu",
                "files/models/FRE/LE-7/LE-7Bump_NRM.dds",
                "files/models/FRE/LE-7/LE-7Emissive.dds",
                "files/models/FRE/LE-7/LE-7Texture_Compiled.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "gimbalTransform",
            ModelName: "LE-7",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/LE7.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "LE-7Heat"
            ]
        }, { //Model.RD843
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.276,
            OriginalBaseWidth: 0.3,
            PlumeSizeMultiplier: 0.23,
            PlumePositionOffset: 0.042,
            NodeStackTop: 0.316,
            NodeStackBottom: -0.198,
            ModelPath: "GenericEngines/models/FRE/RD-843/RD-843",
            ModelFiles: [
                "files/models/FRE/RD-843/RD-843.mu",
                "files/models/FRE/RD-843/TextureRD-843_Compiled.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "gimbalTransform",
            ModelName: "RD-843",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/RD843.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.Rutherford
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.322,
            OriginalBaseWidth: 0.506,
            PlumeSizeMultiplier: 0.28,
            PlumePositionOffset: 0.14,
            NodeStackTop: 0.348,
            NodeStackBottom: -0.405,
            ModelPath: "GenericEngines/models/FRE/Rutherford/Rutherford",
            ModelFiles: [
                "files/models/FRE/Rutherford/Rutherford.mu",
                "files/models/FRE/Rutherford/RutherfordEmissive.dds",
                "files/models/FRE/Rutherford/RutherfordMountTexture_Compiled.dds",
                "files/models/FRE/Rutherford/RutherfordNozzleTexture_Compiled.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "gimbalTransform",
            ModelName: "Rutherford",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/Rutherford.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "RutherfordHeat"
            ]
        }, { //Model.RutherfordVac
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.679,
            OriginalBaseWidth: 0.506,
            PlumeSizeMultiplier: 0.6,
            PlumePositionOffset: 0.57,
            NodeStackTop: 0.348,
            NodeStackBottom: -1.015,
            ModelPath: "GenericEngines/models/FRE/Rutherford/RutherfordVac",
            ModelFiles: [
                "files/models/FRE/Rutherford/RutherfordVac.mu",
                "files/models/FRE/Rutherford/RutherfordVacEmissive.dds",
                "files/models/FRE/Rutherford/RutherfordMountTexture_Compiled.dds",
                "files/models/FRE/Rutherford/RutherfordVacNozzleTexture_Compiled.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "gimbalTransform",
            ModelName: "Rutherford Vacuum",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/RutherfordVac.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "RutherfordHeat",
                "RutherfordVacHeat"
            ]
        }, { //Model.P80
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 2.326,
            OriginalBaseWidth: 2.999,
            PlumeSizeMultiplier: 2,
            PlumePositionOffset: 0.88,
            NodeStackTop: 5.33,
            NodeStackBottom: -6.40,
            ModelPath: "GenericEngines/models/FRE/VegaSRM/P80",
            ModelFiles: [
                "files/models/FRE/VegaSRM/P80.mu",
                "files/models/FRE/VegaSRM/TextureP80_Compiled.dds",
                "files/models/FRE/VegaSRM/VegaEmissive.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "P80",
            ModelType: EngineGroupType.SRB,
            HiddenMuObjects: [],
            CanAttachOnModel: true,
            OriginalTankVolume: 54649,
            RadialAttachment: true,
            RadialAttachmentPoint: 1.5,
            ImageSource: "img/modelPreviews/P80.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "P80Heat"
            ]
        }, { //Model.Zefiro9
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 1.036,
            OriginalBaseWidth: 1.9,
            PlumeSizeMultiplier: 0.9,
            PlumePositionOffset: 0.32,
            NodeStackTop: 1.7,
            NodeStackBottom: -1.8,
            ModelPath: "GenericEngines/models/FRE/VegaSRM/Zefiro9",
            ModelFiles: [
                "files/models/FRE/VegaSRM/Zefiro9.mu",
                "files/models/FRE/VegaSRM/TextureZefiro9_Compiled.dds",
                "files/models/FRE/VegaSRM/VegaEmissive.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "Zefiro 9",
            ModelType: EngineGroupType.SRB,
            HiddenMuObjects: [],
            CanAttachOnModel: true,
            OriginalTankVolume: 4940,
            RadialAttachment: true,
            RadialAttachmentPoint: 0.95,
            ImageSource: "img/modelPreviews/Zefiro9.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "Zefiro9Heat"
            ]
        }, { //Model.Zefiro23
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 1.449,
            OriginalBaseWidth: 1.9,
            PlumeSizeMultiplier: 1.3,
            PlumePositionOffset: 0.64,
            NodeStackTop: 3.4,
            NodeStackBottom: -4.18,
            ModelPath: "GenericEngines/models/FRE/VegaSRM/Zefiro23",
            ModelFiles: [
                "files/models/FRE/VegaSRM/Zefiro23.mu",
                "files/models/FRE/VegaSRM/TextureZefiro23_Compiled.dds",
                "files/models/FRE/VegaSRM/VegaEmissive.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "Zefiro 23",
            ModelType: EngineGroupType.SRB,
            HiddenMuObjects: [],
            CanAttachOnModel: true,
            OriginalTankVolume: 12267,
            RadialAttachment: true,
            RadialAttachmentPoint: 0.95,
            ImageSource: "img/modelPreviews/Zefiro23.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "Zefiro23Heat"
            ]
        }, { //Model.Viking
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.944,
            OriginalBaseWidth: 0.947,
            PlumeSizeMultiplier: 0.8,
            PlumePositionOffset: 1.55,
            NodeStackTop: 1.6,
            NodeStackBottom: -1.03,
            ModelPath: "GenericEngines/models/FRE/Viking/VikingLower",
            ModelFiles: [
                "files/models/FRE/Viking/VikingLower.mu",
                "files/models/FRE/Viking/TextureVikingLower_Compiled.dds",
                "files/models/FRE/Viking/VikingLowerEmissive.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "gimbalTransform",
            ModelName: "Viking",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/Viking.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "VikingHeat"
            ]
        }, { //Model.VikingVac
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 1.8,
            OriginalBaseWidth: 0.947,
            PlumeSizeMultiplier: 1.55,
            PlumePositionOffset: 0.9,
            NodeStackTop: 1.59,
            NodeStackBottom: -2.04,
            ModelPath: "GenericEngines/models/FRE/VikingVac/VikingUpper",
            ModelFiles: [
                "files/models/FRE/VikingVac/VikingUpper.mu",
                "files/models/FRE/VikingVac/VikingUpperEmissive.dds",
                "files/models/FRE/VikingVac/TextureVikingUpper_Compiled.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "gimbalTransform",
            ModelName: "Viking Vacuum",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/VikingVac.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "VikingHeat"
            ]
        }, { //Model.ApolloSPSBlockII
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 1.639,
            OriginalBaseWidth: 2.5,
            PlumeSizeMultiplier: 1.4,
            PlumePositionOffset: 1.08,
            NodeStackTop: 0.03,
            NodeStackBottom: -1.91,
            ModelPath: "GenericEngines/models/BDB/Apollo/bluedog_Apollo_Block2_ServiceEngine",
            ModelFiles: [
                "files/models/BDB/Apollo/bluedog_Apollo_Block2_ServiceEngine.mu",
                "files/models/BDB/Apollo/bluedog_Apollo_Service.dds",
                "files/models/BDB/Apollo/bluedog_Apollo_Service_Emit.dds",
                "files/models/BDB/Apollo/bluedog_Apollo_Service_NRM.dds",
                "files/models/BDB/Apollo/bluedog_StructuralTop.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "Apollo Service Propulsion System Block II",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [
                "fairing"
            ],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/ApolloSPSBlockII.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "bluedog_ApolloBlock2Service_Emit"
            ]
        }, { //Model.ApolloSPSBlockIII
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.578,
            OriginalBaseWidth: 2.5,
            PlumeSizeMultiplier: 0.5,
            PlumePositionOffset: 0.24,
            NodeStackTop: 0.03,
            NodeStackBottom: -0.844,
            ModelPath: "GenericEngines/models/BDB/Apollo/bluedog_Apollo_Block3_ServiceEngine",
            ModelFiles: [
                "files/models/BDB/Apollo/bluedog_Apollo_Block3_ServiceEngine.mu",
                "files/models/BDB/Apollo/bluedog_LEM.dds",
                "files/models/BDB/Apollo/bluedog_LEM_Emit.dds",
                "files/models/BDB/Apollo/bluedog_LEM_NRM.dds",
                "files/models/BDB/Apollo/bluedog_Apollo_Service.dds",
                "files/models/BDB/Apollo/bluedog_Apollo_Service_NRM.dds",
                "files/models/BDB/Apollo/bluedog_StructuralTop.dds",
                "files/models/BDB/Apollo/bluedog_StructuralTop_NRM.dds",
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "Apollo Service Propulsion System Block III",
            ModelType: EngineGroupType.AlternativeHistory,
            HiddenMuObjects: [
                "fairing"
            ],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/ApolloSPSBlockIII.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "LEM_spsA_Emit_Anim"
            ]
        }, { //Model.ApolloSPSBlockV
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.81,
            OriginalBaseWidth: 2.5,
            PlumeSizeMultiplier: 0.7,
            PlumePositionOffset: 0.46,
            NodeStackTop: 0.02,
            NodeStackBottom: -1.06,
            ModelPath: "GenericEngines/models/BDB/Apollo/bluedog_Apollo_Block5_ServiceEngine",
            ModelFiles: [
                "files/models/BDB/Apollo/bluedog_Apollo_Block5_ServiceEngine.mu",
                "files/models/BDB/Apollo/bluedog_LEM.dds",
                "files/models/BDB/Apollo/bluedog_LEM_NRM.dds",
                "files/models/BDB/Apollo/bluedog_Apollo_Service.dds",
                "files/models/BDB/Apollo/bluedog_Apollo_Service_NRM.dds",
                "files/models/BDB/Apollo/bluedog_Apollo_ExtraParts1.dds",
                "files/models/BDB/Apollo/bluedog_Apollo_ExtraParts1_NRM.dds",
                "files/models/BDB/Apollo/bluedog_StructuralTop.dds",
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "Apollo Service Propulsion System Block V",
            ModelType: EngineGroupType.AlternativeHistory,
            HiddenMuObjects: [
                "fairing"
            ],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/ApolloSPSBlockV.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.LMAE_BDB
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.531,
            OriginalBaseWidth: 0.373,
            PlumeSizeMultiplier: 0.45,
            PlumePositionOffset: -0.03,
            NodeStackTop: 0.28,
            NodeStackBottom: -0.58,
            ModelPath: "GenericEngines/models/BDB/Apollo/bluedog_LEM_Ascent_Engine",
            ModelFiles: [
                "files/models/BDB/Apollo/bluedog_LEM_Ascent_Engine.mu",
                "files/models/BDB/Apollo/bluedog_LEM.dds",
                "files/models/BDB/Apollo/bluedog_LEM_NRM.dds",
                "files/models/BDB/Apollo/bluedog_LEM_Emit.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "Lunar Module Ascent Engine",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/LMAE_BDB.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "LEM_Ascent_Emit_Anim"
            ]
        }, { //Model.LMDE_BDB
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.811,
            OriginalBaseWidth: 0.391,
            PlumeSizeMultiplier: 0.7,
            PlumePositionOffset: 0.52,
            NodeStackTop: 0.138,
            NodeStackBottom: -0.99,
            ModelPath: "GenericEngines/models/BDB/Apollo/bluedog_LEM_Descent_Engine",
            ModelFiles: [
                "files/models/BDB/Apollo/bluedog_LEM_Descent_Engine.mu",
                "files/models/BDB/Apollo/bluedog_LEM.dds",
                "files/models/BDB/Apollo/bluedog_LEM_NRM.dds",
                "files/models/BDB/Apollo/bluedog_LEM_Emit.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "Lunar Module Descent Engine",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/LMDE_BDB.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "LEM_Descent_Emit_Anim"
            ]
        }, { //Model.LR89
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.723,
            OriginalBaseWidth: 0.66,
            PlumeSizeMultiplier: 0.62,
            PlumePositionOffset: 0,
            NodeStackTop: 0.33,
            NodeStackBottom: -1.02,
            ModelPath: "GenericEngines/models/BDB/Atlas/bluedog_Atlas_LR89",
            ModelFiles: [
                "files/models/BDB/Atlas/bluedog_Atlas_LR89.mu",
                "files/models/BDB/Atlas/bluedog_Atlas_Engines.dds",
                "files/models/BDB/Atlas/bluedog_Atlas_Engines_NRM.dds",
                "files/models/BDB/Atlas/bluedog_Atlas_Engines_Emissive.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "gimbalTransform",
            ModelName: "LR89",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/LR89.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "LR89_Heat_Anim"
            ]
        }, { //Model.LR101
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.111,
            OriginalBaseWidth: 0.25,
            PlumeSizeMultiplier: 0.095,
            PlumePositionOffset: 0.028,
            NodeStackTop: 0.075,
            NodeStackBottom: -0.505,
            ModelPath: "GenericEngines/models/BDB/Atlas/bluedog_Atlas_LR101_Inline",
            ModelFiles: [
                "files/models/BDB/Atlas/bluedog_Atlas_LR101_Inline.mu",
                "files/models/BDB/Atlas/bluedog_Atlas_Engines.dds",
                "files/models/BDB/Atlas/bluedog_Atlas_Engines_NRM.dds",
                "files/models/BDB/Atlas/bluedog_Atlas_Engines_Emissive.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "YawGimbal",
            // This one uses separate nodes for yaw and pitch gimbal.
            // If more engines have this behaviour, I'll consider implementing independent gimbals.
            // For now I'll leave it as it is.
            ModelName: "LR101",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/LR101.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "LR101_Heat_Anim"
            ]
        }, { //Model.LR105
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.73,
            OriginalBaseWidth: 0.66,
            PlumeSizeMultiplier: 0.64,
            PlumePositionOffset: -0.07,
            NodeStackTop: 0.774,
            NodeStackBottom: -0.774,
            ModelPath: "GenericEngines/models/BDB/Atlas/bluedog_Atlas_LR105",
            ModelFiles: [
                "files/models/BDB/Atlas/bluedog_Atlas_LR105.mu",
                "files/models/BDB/Atlas/bluedog_Atlas_Engines.dds",
                "files/models/BDB/Atlas/bluedog_Atlas_Engines_NRM.dds",
                "files/models/BDB/Atlas/bluedog_Atlas_Engines_Emissive.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "gimbalTransform",
            ModelName: "LR105",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/LR105.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "bluedog_Atlas_LR105_Emit"
            ]
        }, { //Model.RD180_BDB
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.819,
            OriginalBaseWidth: 1.6,
            PlumeSizeMultiplier: 0.71,
            PlumePositionOffset: -0.32,
            NodeStackTop: 0.4,
            NodeStackBottom: -1.65,
            ModelPath: "GenericEngines/models/BDB/AtlasV/bluedog_AtlasV_RD180_Naked",
            ModelFiles: [
                "files/models/BDB/AtlasV/bluedog_AtlasV_RD180_Naked.mu",
                "files/models/BDB/AtlasV/bluedog_RD180.dds",
                "files/models/BDB/AtlasV/bluedog_RD180_emit.dds",
                "files/models/BDB/AtlasV/bluedog_RD180_NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "pitchGimbalTransform", // Two separate nodes, but they're both in the same place.
            ModelName: "RD-180",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/RD180_BDB.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "RD180_Heat_Anim"
            ]
        }, { //Model.RL10
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.641,
            OriginalBaseWidth: 0.352,
            PlumeSizeMultiplier: 0.57,
            PlumePositionOffset: 0,
            NodeStackTop: 0.326,
            NodeStackBottom: -0.81,
            ModelPath: "GenericEngines/models/BDB/Centaur/bluedog_Centaur_RL10_Shroudless",
            ModelFiles: [
                "files/models/BDB/Centaur/bluedog_Centaur_RL10_Shroudless.mu",
                "files/models/BDB/Centaur/bluedog_RL10.dds",
                "files/models/BDB/Centaur/bluedog_RL10_Emit.dds",
                "files/models/BDB/Centaur/bluedog_RL10_NRM.dds",
                "files/models/BDB/Centaur/bluedog_Centaur.dds",
                "files/models/BDB/Centaur/bluedog_Centaur_NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "gimbalTransform",
            ModelName: "RL10",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/RL10.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.73,
            OriginalBaseWidth: 0.352,
            PlumeSizeMultiplier: 0.64,
            PlumePositionOffset: 0,
            NodeStackTop: 0.332,
            NodeStackBottom: -1.18,
            ModelPath: "GenericEngines/models/BDB/Centaur/bluedog_Centaur_RL10A41_Shroudless_Extended",
            ModelFiles: [
                "files/models/BDB/Centaur/bluedog_Centaur_RL10A41_Shroudless_Extended.mu",
                "files/models/BDB/Centaur/bluedog_RL10.dds",
                "files/models/BDB/Centaur/bluedog_RL10_Emit.dds",
                "files/models/BDB/Centaur/bluedog_RL10_NRM.dds",
                "files/models/BDB/Centaur/bluedog_Centaur.dds",
                "files/models/BDB/Centaur/bluedog_Centaur_NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "gimbalTransform",
            ModelName: "RL10A-4-1",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/RL10A41.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "RL10A41_Emit"
            ]
        }, { //Model.RL10B2_BDB
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.905,
            OriginalBaseWidth: 0.64,
            PlumeSizeMultiplier: 0.8,
            PlumePositionOffset: 0,
            NodeStackTop: 0.33,
            NodeStackBottom: -1.75,
            ModelPath: "GenericEngines/models/BDB/Centaur/bluedog_Centaur_RL10B2_Shroudless_Extended",
            ModelFiles: [
                "files/models/BDB/Centaur/bluedog_Centaur_RL10B2_Shroudless_Extended.mu",
                "files/models/BDB/Centaur/bluedog_RL10.dds",
                "files/models/BDB/Centaur/bluedog_RL10_Emit.dds",
                "files/models/BDB/Centaur/bluedog_RL10_NRM.dds",
                "files/models/BDB/Centaur/bluedog_Centaur.dds",
                "files/models/BDB/Centaur/bluedog_Centaur_NRM.dds",
                "files/models/BDB/Centaur/bluedog_Centaur_NozzleExtension.dds",
                "files/models/BDB/Centaur/bluedog_Centaur_NozzleExtension_Emit.dds",
                "files/models/BDB/Centaur/bluedog_Centaur_NozzleExtension_Nrm.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "gimbalTransform",
            ModelName: "RL10B-2",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/RL10B2_BDB.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "RL10B2_Emit"
            ]
        }, { //Model.GEM40
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.508,
            OriginalBaseWidth: 0.625,
            PlumeSizeMultiplier: 0.42,
            PlumePositionOffset: -0.08,
            NodeStackTop: 3.055,
            NodeStackBottom: -3.8,
            ModelPath: "GenericEngines/models/BDB/Delta/bluedog_Delta_GEM40_Inline",
            ModelFiles: [
                "files/models/BDB/Delta/bluedog_Delta_GEM40_Inline.mu",
                "files/models/BDB/Delta/bluedog_Delta2_Engines.dds",
                "files/models/BDB/Delta/bluedog_Delta2_Engines_Emit.dds",
                "files/models/BDB/Delta/bluedog_Delta2_Engines_NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "gimbalTransform",
            ModelName: "GEM 40",
            ModelType: EngineGroupType.SRB,
            HiddenMuObjects: [],
            CanAttachOnModel: true,
            OriginalTankVolume: 1337,
            RadialAttachment: true,
            RadialAttachmentPoint: 0.3125,
            ImageSource: "img/modelPreviews/GEM40.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "GEM60_Emit_Anim"
            ]
        }, { //Model.AJ10_BDB
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.813,
            OriginalBaseWidth: 0.54,
            PlumeSizeMultiplier: 0.73,
            PlumePositionOffset: 0,
            NodeStackTop: 0.033,
            NodeStackBottom: -1.21,
            ModelPath: "GenericEngines/models/BDB/Delta/bluedog_DeltaK_AJ10_Shroudless",
            ModelFiles: [
                "files/models/BDB/Delta/bluedog_DeltaK_AJ10_Shroudless.mu",
                "files/models/BDB/Delta/bluedog_DeltaK.dds",
                "files/models/BDB/Delta/bluedog_DeltaK_Emit.dds",
                "files/models/BDB/Delta/bluedog_DeltaK_NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform1",
            ModelName: "AJ10",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/AJ10_BDB.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.Rita
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.865,
            OriginalBaseWidth: 1.377,
            PlumeSizeMultiplier: 0.76,
            PlumePositionOffset: 0.55,
            NodeStackTop: 0.88,
            NodeStackBottom: -1.29,
            ModelPath: "GenericEngines/models/BDB/Diamant/bluedog_Diamant_Rita_Shroudless_ColliderTweaked",
            ModelFiles: [
                "files/models/BDB/Diamant/bluedog_Diamant_Rita_Shroudless_ColliderTweaked.mu",
                "files/models/BDB/Diamant/bluedog_DiamantEngines.dds",
                "files/models/BDB/Diamant/bluedog_DiamantEngines_NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "P4 Rita",
            ModelType: EngineGroupType.SRB,
            HiddenMuObjects: [],
            CanAttachOnModel: true,
            OriginalTankVolume: 1395,
            RadialAttachment: true,
            RadialAttachmentPoint: 0.6885,
            ImageSource: "img/modelPreviews/Rita.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.Rubis
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.498,
            OriginalBaseWidth: 0.591,
            PlumeSizeMultiplier: 0.43,
            PlumePositionOffset: 0.186,
            NodeStackTop: 0.485,
            NodeStackBottom: -0.725,
            ModelPath: "GenericEngines/models/BDB/Diamant/bluedog_Diamant_Rubis_Shroudless_ColliderTweaked",
            ModelFiles: [
                "files/models/BDB/Diamant/bluedog_Diamant_Rubis_Shroudless_ColliderTweaked.mu",
                "files/models/BDB/Diamant/bluedog_DiamantEngines.dds",
                "files/models/BDB/Diamant/bluedog_DiamantEngines_NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "Rubis",
            ModelType: EngineGroupType.SRB,
            HiddenMuObjects: [],
            CanAttachOnModel: true,
            OriginalTankVolume: 130,
            RadialAttachment: true,
            RadialAttachmentPoint: 0.2955,
            ImageSource: "img/modelPreviews/Rubis.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.Topaze
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.219,
            OriginalBaseWidth: 0.623,
            PlumeSizeMultiplier: 0.19,
            PlumePositionOffset: 0,
            NodeStackTop: 1.275,
            NodeStackBottom: -1.452,
            ModelPath: "GenericEngines/models/BDB/Diamant/bluedog_Diamant_Topaze_Shroudless_Tweaked",
            ModelFiles: [
                "files/models/BDB/Diamant/bluedog_Diamant_Topaze_Shroudless_Tweaked.mu",
                "files/models/BDB/Diamant/bluedog_DiamantEngines.dds",
                "files/models/BDB/Diamant/bluedog_DiamantEngines_NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "gimbalTransform",
            ModelName: "Topaze",
            ModelType: EngineGroupType.SRB,
            HiddenMuObjects: [
                "fairing"
            ],
            CanAttachOnModel: true,
            OriginalTankVolume: 432,
            RadialAttachment: true,
            RadialAttachmentPoint: 0.3115,
            ImageSource: "img/modelPreviews/Topaze.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.Able
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.346,
            OriginalBaseWidth: 0.337,
            PlumeSizeMultiplier: 0.3,
            PlumePositionOffset: 0.18,
            NodeStackTop: 0.5,
            NodeStackBottom: -0.29,
            ModelPath: "GenericEngines/models/BDB/EarlyRockets/bluedog_ableEngine",
            ModelFiles: [
                "files/models/BDB/EarlyRockets/bluedog_ableEngine.mu",
                "files/models/BDB/EarlyRockets/bluedog_earlyEngines.dds",
                "files/models/BDB/EarlyRockets/bluedog_earlyEngines_Emissive.dds",
                "files/models/BDB/EarlyRockets/bluedog_earlyEngines_NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "Able",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [
                "fairing"
            ],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/Able.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "Able_Emit_Anim"
            ]
        }, { //Model.Ablestar
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.470,
            OriginalBaseWidth: 0.585,
            PlumeSizeMultiplier: 0.42,
            PlumePositionOffset: 0.265,
            NodeStackTop: 0.666,
            NodeStackBottom: -0.425,
            ModelPath: "GenericEngines/models/BDB/EarlyRockets/bluedog_ablestarEngine",
            ModelFiles: [
                "files/models/BDB/EarlyRockets/bluedog_ablestarEngine.mu",
                "files/models/BDB/EarlyRockets/bluedog_earlyEngines.dds",
                "files/models/BDB/EarlyRockets/bluedog_earlyEngines_Emissive.dds",
                "files/models/BDB/EarlyRockets/bluedog_earlyEngines_NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "Ablestar",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [
                "fairing"
            ],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/Ablestar.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "Able_Emit_Anim"
            ]
        }, { //Model.Navaho
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.269,
            OriginalBaseWidth: 0.81,
            PlumeSizeMultiplier: 0.235,
            PlumePositionOffset: 0,
            NodeStackTop: 0.52,
            NodeStackBottom: -0.535,
            ModelPath: "GenericEngines/models/BDB/EarlyRockets/bluedog_navaho_Tweaked",
            ModelFiles: [
                "files/models/BDB/EarlyRockets/bluedog_navaho_Tweaked.mu",
                "files/models/BDB/EarlyRockets/bluedog_earlyEngines_NRM.dds",
                "files/models/BDB/EarlyRockets/bluedog_earlyEngines.dds",
                "files/models/BDB/EarlyRockets/bluedog_thorEngine_NRM.dds",
                "files/models/BDB/EarlyRockets/bluedog_thorEngine.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "gimbal",
            ModelName: "Navaho",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/Navaho.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.Thor
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.885,
            OriginalBaseWidth: 1.499,
            PlumeSizeMultiplier: 0.78,
            PlumePositionOffset: 0.58,
            NodeStackTop: 0.125,
            NodeStackBottom: -2.13,
            ModelPath: "GenericEngines/models/BDB/EarlyRockets/bluedog_thorEngine",
            ModelFiles: [
                "files/models/BDB/EarlyRockets/bluedog_thorEngine.mu",
                "files/models/BDB/EarlyRockets/bluedog_thorEngine_NRM.dds",
                "files/models/BDB/EarlyRockets/bluedog_thorEngine.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "Thor",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/Thor.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.Vanguard
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.284,
            OriginalBaseWidth: 0.605,
            PlumeSizeMultiplier: 0.25,
            PlumePositionOffset: 0.62,
            NodeStackTop: 0.37,
            NodeStackBottom: -0.87,
            ModelPath: "GenericEngines/models/BDB/EarlyRockets/bluedog_vanguardEngine",
            ModelFiles: [
                "files/models/BDB/EarlyRockets/bluedog_vanguardEngine.mu",
                "files/models/BDB/EarlyRockets/bluedog_earlyEngines.dds",
                "files/models/BDB/EarlyRockets/bluedog_earlyEngines_Emissive.dds",
                "files/models/BDB/EarlyRockets/bluedog_earlyEngines_NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "Vanguard",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [
                "fairing"
            ],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/Vanguard.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "Vanguard_Engine_Anim"
            ]
        }, { //Model.E1
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.975,
            OriginalBaseWidth: 1.061,
            PlumeSizeMultiplier: 0.86,
            PlumePositionOffset: -0.15,
            NodeStackTop: 1.2,
            NodeStackBottom: -0.86,
            ModelPath: "GenericEngines/models/BDB/Engines/bluedog_E1",
            ModelFiles: [
                "files/models/BDB/Engines/bluedog_E1.mu",
                "files/models/BDB/Engines/bluedog_E1.dds",
                "files/models/BDB/Engines/bluedog_E1_Emit.dds",
                "files/models/BDB/Engines/bluedog_E1_NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "gimbalTransform",
            ModelName: "E-1",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/E1.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "E1_Heat_Anim"
            ]
        }, { //Model.Sargent
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.106,
            OriginalBaseWidth: 0.12,
            PlumeSizeMultiplier: 0.095,
            PlumePositionOffset: 0,
            NodeStackTop: 0.3,
            NodeStackBottom: -0.52,
            ModelPath: "GenericEngines/models/BDB/Explorer/bluedog_Sargent_1x",
            ModelFiles: [
                "files/models/BDB/Explorer/bluedog_Sargent_1x.mu",
                "files/models/BDB/Explorer/bluedog_JunoProbes.dds",
                "files/models/BDB/Explorer/bluedog_JunoProbes_NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "Sargent",
            ModelType: EngineGroupType.SRB,
            HiddenMuObjects: [
                "fairing"
            ],
            CanAttachOnModel: true,
            OriginalTankVolume: 4.3,
            RadialAttachment: true,
            RadialAttachmentPoint: 0.06,
            ImageSource: "img/modelPreviews/Sargent.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.Juno6K
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.376,
            OriginalBaseWidth: 0.898,
            PlumeSizeMultiplier: 0.32,
            PlumePositionOffset: 0.48,
            NodeStackTop: 0.013,
            NodeStackBottom: -1.09,
            ModelPath: "GenericEngines/models/BDB/Juno/bluedog_Juno_Engine6K",
            ModelFiles: [
                "files/models/BDB/Juno/bluedog_Juno_Engine6K.mu",
                "files/models/BDB/Juno/bluedog_JunoEngines.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "Juno 6K",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [
                "fairing"
            ],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/Juno6K.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.Juno45K
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.495,
            OriginalBaseWidth: 0.87,
            PlumeSizeMultiplier: 0.42,
            PlumePositionOffset: 0.56,
            NodeStackTop: 0.014,
            NodeStackBottom: -1.19,
            ModelPath: "GenericEngines/models/BDB/Juno/bluedog_Juno_Engine45K",
            ModelFiles: [
                "files/models/BDB/Juno/bluedog_Juno_Engine45K.mu",
                "files/models/BDB/Juno/bluedog_JunoEngines.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "Juno 45K",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [
                "fairing"
            ],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/Juno45K.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.S3D
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.745,
            OriginalBaseWidth: 0.93,
            PlumeSizeMultiplier: 0.66,
            PlumePositionOffset: 0.92,
            NodeStackTop: 0.074,
            NodeStackBottom: -1.466,
            ModelPath: "GenericEngines/models/BDB/Juno/bluedog_Juno_EngineS3D",
            ModelFiles: [
                "files/models/BDB/Juno/bluedog_Juno_EngineS3D.mu",
                "files/models/BDB/Juno/bluedog_JunoEngines.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "S3D",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [
                "fairing"
            ],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/S3D.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.F1_BDB
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 1.96,
            OriginalBaseWidth: 2.036,
            PlumeSizeMultiplier: 1.68,
            PlumePositionOffset: 0,
            NodeStackTop: 1.13,
            NodeStackBottom: -2,
            ModelPath: "GenericEngines/models/BDB/Saturn/bluedog_F1",
            ModelFiles: [
                "files/models/BDB/Saturn/bluedog_F1.mu",
                "files/models/BDB/Saturn/bluedog_F1.dds",
                "files/models/BDB/Saturn/bluedog_F1_NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "gimbalTransform",
            ModelName: "F-1",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/F1_BDB.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.H1C
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.589,
            OriginalBaseWidth: 0.535,
            PlumeSizeMultiplier: 0.53,
            PlumePositionOffset: 0,
            NodeStackTop: 0.59,
            NodeStackBottom: -0.76,
            ModelPath: "GenericEngines/models/BDB/Saturn/bluedog_H1C_Tweaked",
            ModelFiles: [
                "files/models/BDB/Saturn/bluedog_H1C_Tweaked.mu",
                "files/models/BDB/Saturn/bluedog_H1.dds",
                "files/models/BDB/Saturn/bluedog_H1_nrm.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "H-1C",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/H1C.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.H1D
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.588,
            OriginalBaseWidth: 0.536,
            PlumeSizeMultiplier: 0.52,
            PlumePositionOffset: 0,
            NodeStackTop: 0.593,
            NodeStackBottom: -0.765,
            ModelPath: "GenericEngines/models/BDB/Saturn/bluedog_H1D_Tweaked",
            ModelFiles: [
                "files/models/BDB/Saturn/bluedog_H1D_Tweaked.mu",
                "files/models/BDB/Saturn/bluedog_H1.dds",
                "files/models/BDB/Saturn/bluedog_H1_nrm.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "Gimbal",
            ModelName: "H-1D",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/H1D.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.J2_BDB
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 1.147,
            OriginalBaseWidth: 0.85,
            PlumeSizeMultiplier: 1,
            PlumePositionOffset: -0.13,
            NodeStackTop: 0.737,
            NodeStackBottom: -0.93,
            ModelPath: "GenericEngines/models/BDB/Saturn/bluedog_J2",
            ModelFiles: [
                "files/models/BDB/Saturn/bluedog_J2.mu",
                "files/models/BDB/Saturn/bluedog_J2.dds",
                "files/models/BDB/Saturn/bluedog_J2_NRM.dds",
                "files/models/BDB/Saturn/bluedog_saturn4B.dds",
                "files/models/BDB/Saturn/bluedog_saturn4B_NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "gimbalTransform",
            ModelName: "J-2",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/J2_BDB.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.J2T
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 1.248, // It's an aerospike. What do I do?
            OriginalBaseWidth: 1.248,
            PlumeSizeMultiplier: 1.3, // Larger than usual, should be a bit wider than bell
            PlumePositionOffset: 0,
            NodeStackTop: 0.06,
            NodeStackBottom: -0.365,
            ModelPath: "GenericEngines/models/BDB/Saturn/bluedog_J2_Toroidal",
            ModelFiles: [
                "files/models/BDB/Saturn/bluedog_J2_Toroidal.mu",
                "files/models/BDB/Saturn/bluedog_J2.dds",
                "files/models/BDB/Saturn/bluedog_J2_NRM.dds",
                "files/models/BDB/Saturn/bluedog_J2_Variants.dds",
                "files/models/BDB/Saturn/bluedog_J2_Variants_NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "J-2T",
            ModelType: EngineGroupType.AlternativeHistory,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/J2T.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.J2SL
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.904,
            OriginalBaseWidth: 0.852,
            PlumeSizeMultiplier: 0.8,
            PlumePositionOffset: -0.39,
            NodeStackTop: 0.7,
            NodeStackBottom: -0.64,
            ModelPath: "GenericEngines/models/BDB/Saturn/bluedog_J2sl",
            ModelFiles: [
                "files/models/BDB/Saturn/bluedog_J2sl.mu",
                "files/models/BDB/Saturn/bluedog_saturn4B.dds",
                "files/models/BDB/Saturn/bluedog_saturn4B_NRM.dds",
                "files/models/BDB/Saturn/bluedog_J2.dds",
                "files/models/BDB/Saturn/bluedog_J2_NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "gimbalTransform",
            ModelName: "J-2SL",
            ModelType: EngineGroupType.AlternativeHistory,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/J2SL.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.AJ260
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 3.914,
            OriginalBaseWidth: 3.83,
            PlumeSizeMultiplier: 3.4,
            PlumePositionOffset: -0.6,
            NodeStackTop: 9.56,
            NodeStackBottom: -11.59,
            ModelPath: "GenericEngines/models/BDB/Saturn/bluedog_saturn_AJ260_LongFlared",
            ModelFiles: [
                "files/models/BDB/Saturn/bluedog_saturn_AJ260_LongFlared.mu",
                "files/models/BDB/Saturn/bluedog_saturn_AJ260.dds",
                "files/models/BDB/Saturn/bluedog_saturn_AJ260_Emit.dds",
                "files/models/BDB/Saturn/bluedog_saturn_AJ260_NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "gimbalTransform",
            ModelName: "AJ-260",
            ModelType: EngineGroupType.SRB,
            HiddenMuObjects: [],
            CanAttachOnModel: true,
            OriginalTankVolume: 134500,
            RadialAttachment: true,
            RadialAttachmentPoint: 1.915,
            ImageSource: "img/modelPreviews/AJ260.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: [
                "AJ260_Vernier_Emit"
            ]
        }, { //Model.LR87
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.708,
            OriginalBaseWidth: 1.873,
            PlumeSizeMultiplier: 0.6,
            PlumePositionOffset: 0.61,
            NodeStackTop: 0.46,
            NodeStackBottom: -1.6,
            ModelPath: "GenericEngines/models/BDB/Titan/bluedog_LR87_Tweaked",
            ModelFiles: [
                "files/models/BDB/Titan/bluedog_LR87_Tweaked.mu",
                "files/models/BDB/Titan/bluedog_TitanEngines.dds",
                "files/models/BDB/Titan/bluedog_TitanEngines_nrm.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "LR87",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/LR87.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.LR87S
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.692,
            OriginalBaseWidth: 0.734,
            PlumeSizeMultiplier: 0.61,
            PlumePositionOffset: 0.58,
            NodeStackTop: 0.17,
            NodeStackBottom: -1.05,
            ModelPath: "GenericEngines/models/BDB/Titan/bluedog_LR87S_Tweaked",
            ModelFiles: [
                "files/models/BDB/Titan/bluedog_LR87S_Tweaked.mu",
                "files/models/BDB/Titan/bluedog_TitanEngines.dds",
                "files/models/BDB/Titan/bluedog_TitanEngines_nrm.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "LR87 Single",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/LR87S.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.LR91_BDB
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.854,
            OriginalBaseWidth: 1.35,
            PlumeSizeMultiplier: 0.75,
            PlumePositionOffset: 0.65,
            NodeStackTop: -0.06,
            NodeStackBottom: -1.38,
            ModelPath: "GenericEngines/models/BDB/Titan/bluedog_LR91_Tweaked",
            ModelFiles: [
                "files/models/BDB/Titan/bluedog_LR91_Tweaked.mu",
                "files/models/BDB/Titan/bluedog_TitanEngines.dds",
                "files/models/BDB/Titan/bluedog_TitanEngines_nrm.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "LR91",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/LR91_BDB.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.Soltan
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 1.497,
            OriginalBaseWidth: 1.497,
            PlumeSizeMultiplier: 1.3,
            PlumePositionOffset: -0.15,
            NodeStackTop: 6.95,
            NodeStackBottom: -4.59,
            ModelPath: "GenericEngines/models/BDB/Titan/bluedog_Soltan_Tweaked",
            ModelFiles: [
                "files/models/BDB/Titan/bluedog_Soltan_Tweaked.mu",
                "files/models/BDB/Titan/bluedog_TitanSRBs.dds",
                "files/models/BDB/Titan/bluedog_TitanSRBs_nrm.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "Soltan",
            ModelType: EngineGroupType.SRB,
            HiddenMuObjects: [],
            CanAttachOnModel: true,
            OriginalTankVolume: 12500,
            RadialAttachment: true,
            RadialAttachmentPoint: 0.75,
            ImageSource: "img/modelPreviews/Soltan.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.UA1205
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 1.9,
            OriginalBaseWidth: 1.87,
            PlumeSizeMultiplier: 1.65,
            PlumePositionOffset: -0.08,
            NodeStackTop: 8.1,
            NodeStackBottom: -6.25,
            ModelPath: "GenericEngines/models/BDB/Titan/bluedog_Titan_SRB5segStack",
            ModelFiles: [
                "files/models/BDB/Titan/bluedog_Titan_SRB5segStack.mu",
                "files/models/BDB/Titan/bluedog_TitanSRBs.dds",
                "files/models/BDB/Titan/bluedog_TitanSRBs_nrm.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "UA1205",
            ModelType: EngineGroupType.SRB,
            HiddenMuObjects: [],
            CanAttachOnModel: true,
            OriginalTankVolume: 22600,
            RadialAttachment: true,
            RadialAttachmentPoint: 0.935,
            ImageSource: "img/modelPreviews/UA1205.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.UA1207
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 1.9,
            OriginalBaseWidth: 1.87,
            PlumeSizeMultiplier: 1.65,
            PlumePositionOffset: -0.08,
            NodeStackTop: 11.85,
            NodeStackBottom: -6.25,
            ModelPath: "GenericEngines/models/BDB/Titan/bluedog_Titan_SRB7segStack",
            ModelFiles: [
                "files/models/BDB/Titan/bluedog_Titan_SRB7segStack.mu",
                "files/models/BDB/Titan/bluedog_TitanSRBs.dds",
                "files/models/BDB/Titan/bluedog_TitanSRBs_nrm.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "UA1207",
            ModelType: EngineGroupType.SRB,
            HiddenMuObjects: [],
            CanAttachOnModel: true,
            OriginalTankVolume: 28900,
            RadialAttachment: true,
            RadialAttachmentPoint: 0.935,
            ImageSource: "img/modelPreviews/UA1207.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.Transtage
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.742,
            OriginalBaseWidth: 1.87,
            PlumeSizeMultiplier: 0.65,
            PlumePositionOffset: 0.41,
            NodeStackTop: 0.025,
            NodeStackBottom: -1.66,
            ModelPath: "GenericEngines/models/BDB/Titan/bluedog_Transtage_Tweaked",
            ModelFiles: [
                "files/models/BDB/Titan/bluedog_Transtage_Tweaked.mu",
                "files/models/BDB/Titan/bluedog_Transtage.dds",
                "files/models/BDB/Titan/bluedog_Transtage_NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "Transtage",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 1200, // Approximation. Are these even fuel tanks?
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/Transtage.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.LR87_5
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.677,
            OriginalBaseWidth: 1.884,
            PlumeSizeMultiplier: 0.6,
            PlumePositionOffset: 0,
            NodeStackTop: 0.83,
            NodeStackBottom: -1.02,
            ModelPath: "GenericEngines/models/BDB/TitanRemake/bluedog_LR87_5_Tweaked",
            ModelFiles: [
                "files/models/BDB/TitanRemake/bluedog_LR87_5_Tweaked.mu",
                "files/models/BDB/TitanRemake/bluedog_TitanEngines_New.dds",
                "files/models/BDB/TitanRemake/bluedog_TitanEngines_New_Emit.dds",
                "files/models/BDB/TitanRemake/bluedog_TitanEngines_New_NRM.dds",
                "files/models/BDB/TitanRemake/bluedog_Titan_innerGlow.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "gimbalTransform",
            ModelName: "LR87-5",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/LR87_5.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.LR87_11
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.735,
            OriginalBaseWidth: 1.882,
            PlumeSizeMultiplier: 0.65,
            PlumePositionOffset: 0,
            NodeStackTop: 0.49,
            NodeStackBottom: -1.674,
            ModelPath: "GenericEngines/models/BDB/TitanRemake/bluedog_LR87_11_Tweaked",
            ModelFiles: [
                "files/models/BDB/TitanRemake/bluedog_LR87_11_Tweaked.mu",
                "files/models/BDB/TitanRemake/bluedog_TitanEngines_New.dds",
                "files/models/BDB/TitanRemake/bluedog_TitanEngines_New_Emit.dds",
                "files/models/BDB/TitanRemake/bluedog_TitanEngines_New_NRM.dds",
                "files/models/BDB/TitanRemake/bluedog_Titan_innerGlow.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "gimbalTransform",
            ModelName: "LR87-11",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/LR87_11.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.LR87_11S
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.733,
            OriginalBaseWidth: 0.78,
            PlumeSizeMultiplier: 0.66,
            PlumePositionOffset: 0.63,
            NodeStackTop: 0.722,
            NodeStackBottom: -1.07,
            ModelPath: "GenericEngines/models/BDB/TitanRemake/bluedog_LR87_11S_Tweaked",
            ModelFiles: [
                "files/models/BDB/TitanRemake/bluedog_LR87_11S_Tweaked.mu",
                "files/models/BDB/TitanRemake/bluedog_TitanEngines_New.dds",
                "files/models/BDB/TitanRemake/bluedog_TitanEngines_New_Emit.dds",
                "files/models/BDB/TitanRemake/bluedog_TitanEngines_New_NRM.dds",
                "files/models/BDB/TitanRemake/bluedog_Titan_innerGlow.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "gimbalTransform",
            ModelName: "LR87-11 Single",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/LR87_11S.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.LR87_11SV
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.918,
            OriginalBaseWidth: 0.78,
            PlumeSizeMultiplier: 0.83,
            PlumePositionOffset: 0.88,
            NodeStackTop: 0.722,
            NodeStackBottom: -1.377,
            ModelPath: "GenericEngines/models/BDB/TitanRemake/bluedog_LR87_11SV_Tweaked",
            ModelFiles: [
                "files/models/BDB/TitanRemake/bluedog_LR87_11SV_Tweaked.mu",
                "files/models/BDB/TitanRemake/bluedog_TitanEngines_New.dds",
                "files/models/BDB/TitanRemake/bluedog_TitanEngines_New_Emit.dds",
                "files/models/BDB/TitanRemake/bluedog_TitanEngines_New_NRM.dds",
                "files/models/BDB/TitanRemake/bluedog_Titan_innerGlow.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "gimbalTransform",
            ModelName: "LR87-11 Vacuum Single",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/LR87_11SV.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.LR87_11SH
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.67,
            OriginalBaseWidth: 0.78,
            PlumeSizeMultiplier: 0.6,
            PlumePositionOffset: 0,
            NodeStackTop: 0.722,
            NodeStackBottom: -0.762,
            ModelPath: "GenericEngines/models/BDB/TitanRemake/bluedog_LR87_11SH_Tweaked",
            ModelFiles: [
                "files/models/BDB/TitanRemake/bluedog_LR87_11SH_Tweaked.mu",
                "files/models/BDB/TitanRemake/bluedog_TitanEngines_New.dds",
                "files/models/BDB/TitanRemake/bluedog_TitanEngines_New_Emit.dds",
                "files/models/BDB/TitanRemake/bluedog_TitanEngines_New_NRM.dds",
                "files/models/BDB/TitanRemake/bluedog_Titan_innerGlow.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "gimbalTransform",
            ModelName: "LR87-11 Hydrolox Single",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/LR87_11SH.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.LR87_11SHV
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.977,
            OriginalBaseWidth: 0.78,
            PlumeSizeMultiplier: 0.88,
            PlumePositionOffset: 0,
            NodeStackTop: 0.722,
            NodeStackBottom: -1.792,
            ModelPath: "GenericEngines/models/BDB/TitanRemake/bluedog_LR87_11SHV_Tweaked",
            ModelFiles: [
                "files/models/BDB/TitanRemake/bluedog_LR87_11SHV_Tweaked.mu",
                "files/models/BDB/TitanRemake/bluedog_TitanEngines_New.dds",
                "files/models/BDB/TitanRemake/bluedog_TitanEngines_New_Emit.dds",
                "files/models/BDB/TitanRemake/bluedog_TitanEngines_New_NRM.dds",
                "files/models/BDB/TitanRemake/bluedog_Titan_innerGlow.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "gimbalTransform",
            ModelName: "LR87-11 Vacuum Hydrolox Single",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/LR87_11SHV.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.LR91_5
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.95,
            OriginalBaseWidth: 0.79,
            PlumeSizeMultiplier: 0.85,
            PlumePositionOffset: -0.1,
            NodeStackTop: 0.603,
            NodeStackBottom: -0.923,
            ModelPath: "GenericEngines/models/BDB/TitanRemake/bluedog_LR91_5_Tweaked",
            ModelFiles: [
                "files/models/BDB/TitanRemake/bluedog_LR91_5_Tweaked.mu",
                "files/models/BDB/TitanRemake/bluedog_TitanEngines_New.dds",
                "files/models/BDB/TitanRemake/bluedog_TitanEngines_New_Emit.dds",
                "files/models/BDB/TitanRemake/bluedog_TitanEngines_New_NRM.dds",
                "files/models/BDB/TitanRemake/bluedog_Titan_innerGlow.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "gimbalTransform",
            ModelName: "LR91-5",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/LR91_5.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.LR91_11
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 0.934,
            OriginalBaseWidth: 0.79,
            PlumeSizeMultiplier: 0.84,
            PlumePositionOffset: 0,
            NodeStackTop: 0.603,
            NodeStackBottom: -1.021,
            ModelPath: "GenericEngines/models/BDB/TitanRemake/bluedog_LR91_11_Tweaked",
            ModelFiles: [
                "files/models/BDB/TitanRemake/bluedog_LR91_11_Tweaked.mu",
                "files/models/BDB/TitanRemake/bluedog_TitanEngines_New.dds",
                "files/models/BDB/TitanRemake/bluedog_TitanEngines_New_Emit.dds",
                "files/models/BDB/TitanRemake/bluedog_TitanEngines_New_NRM.dds",
                "files/models/BDB/TitanRemake/bluedog_Titan_innerGlow.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "gimbalTransform",
            ModelName: "LR91-11",
            ModelType: EngineGroupType.IRL,
            HiddenMuObjects: [],
            CanAttachOnModel: false,
            OriginalTankVolume: 0,
            RadialAttachment: false,
            RadialAttachmentPoint: 0,
            ImageSource: "img/modelPreviews/LR91_11.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.SRMU
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 1.9,
            OriginalBaseWidth: 1.874,
            PlumeSizeMultiplier: 1.7,
            PlumePositionOffset: 0,
            NodeStackTop: 13.176,
            NodeStackBottom: -4.986,
            ModelPath: "GenericEngines/models/BDB/TitanRemake/bluedog_SRMU_Tweaked",
            ModelFiles: [
                "files/models/BDB/TitanRemake/bluedog_SRMU_Tweaked.mu",
                "files/models/BDB/TitanRemake/bluedog_Titan_innerGlow.dds",
                "files/models/BDB/TitanRemake/bluedog_SRMU.dds",
                "files/models/BDB/TitanRemake/bluedog_SRMU_Emit.dds",
                "files/models/BDB/TitanRemake/bluedog_SRMU_NRM.dds",
                "files/models/BDB/TitanRemake/bluedog_Titan2_SecondStageTank_NRM.dds",
                "files/models/BDB/TitanRemake/bluedog_Titan2_SecondStageTank_White.dds",
                "files/models/BDB/TitanRemake/bluedog_TitanSolids_Misc.dds",
                "files/models/BDB/TitanRemake/bluedog_TitanSolids_Misc_NRM.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "gimbalTransform",
            ModelName: "SRMU",
            ModelType: EngineGroupType.SRB,
            HiddenMuObjects: [],
            CanAttachOnModel: true,
            OriginalTankVolume: 32250,
            RadialAttachment: true,
            RadialAttachmentPoint: 0.937,
            ImageSource: "img/modelPreviews/SRMU.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.UA1205_NEW
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 1.75,
            OriginalBaseWidth: 1.874,
            PlumeSizeMultiplier: 1.57,
            PlumePositionOffset: 0.81,
            NodeStackTop: 8.79,
            NodeStackBottom: -5,
            ModelPath: "GenericEngines/models/BDB/TitanRemake/bluedog_UA1205_Tweaked",
            ModelFiles: [
                "files/models/BDB/TitanRemake/bluedog_UA1205_Tweaked.mu",
                "files/models/BDB/TitanRemake/bluedog_Titan_innerGlow.dds",
                "files/models/BDB/TitanRemake/bluedog_Titan2_SecondStageTank_NRM.dds",
                "files/models/BDB/TitanRemake/bluedog_Titan2_SecondStageTank.dds",
                "files/models/BDB/TitanRemake/bluedog_TitanSolids_Misc.dds",
                "files/models/BDB/TitanRemake/bluedog_TitanSolids_Misc_NRM.dds",
                "files/models/BDB/TitanRemake/bluedog_TitanSolids_Misc_Emit.dds",
                "files/models/BDB/TitanRemake/bluedog_TitanSolids_Striped.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "UA1205",
            ModelType: EngineGroupType.SRB,
            HiddenMuObjects: [],
            CanAttachOnModel: true,
            OriginalTankVolume: 23400,
            RadialAttachment: true,
            RadialAttachmentPoint: 0.937,
            ImageSource: "img/modelPreviews/UA1205_NEW.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }, { //Model.UA1207_NEW
            get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
            OriginalBellWidth: 1.75,
            OriginalBaseWidth: 1.874,
            PlumeSizeMultiplier: 1.57,
            PlumePositionOffset: 0.81,
            NodeStackTop: 13.19,
            NodeStackBottom: -5,
            ModelPath: "GenericEngines/models/BDB/TitanRemake/bluedog_UA1207_Tweaked",
            ModelFiles: [
                "files/models/BDB/TitanRemake/bluedog_UA1207_Tweaked.mu",
                "files/models/BDB/TitanRemake/bluedog_Titan_innerGlow.dds",
                "files/models/BDB/TitanRemake/bluedog_Titan2_SecondStageTank_NRM.dds",
                "files/models/BDB/TitanRemake/bluedog_Titan2_SecondStageTank_White.dds",
                "files/models/BDB/TitanRemake/bluedog_TitanSolids_Misc.dds",
                "files/models/BDB/TitanRemake/bluedog_TitanSolids_Misc_NRM.dds",
                "files/models/BDB/TitanRemake/bluedog_TitanSolids_Misc_Emit.dds",
                "files/models/BDB/TitanRemake/bluedog_TitanSolids_Striped.dds"
            ],
            TextureDefinitions: "",
            ThrustTransformName: "thrustTransform",
            GimbalTransformName: "thrustTransform",
            ModelName: "UA1207",
            ModelType: EngineGroupType.SRB,
            HiddenMuObjects: [],
            CanAttachOnModel: true,
            OriginalTankVolume: 32500,
            RadialAttachment: true,
            RadialAttachmentPoint: 0.937,
            ImageSource: "img/modelPreviews/UA1207_NEW.webp",
            get ImageLabel(): string { return this.ModelName },
            HeatAnimations: []
        }
    ];
    
    public static readonly Dropdown: HTMLSelectElement = ModelInfo.BuildDropdown ();
    private static BuildDropdown (): HTMLSelectElement {
        let output = document.createElement ("select");
        
        let groups: { [id: string]: HTMLOptGroupElement } = {};
        for (let i in EngineGroupType) {
            let group = document.createElement ("optgroup");
            group.label = EngineGroupType[i];
            output.appendChild (group);
            groups[EngineGroupType[i]] = group;
        }
        
        ModelInfo.models.forEach ((v, i) => {
            let option = document.createElement ("option");
            option.value = i.toString ();
            option.text = v.ModelName;
            
            groups[v.ModelType].appendChild (option);
        });
        
        return output;
    }
    
}
/* NEW MODEL TEMPLATE
, { //Model.
    get OriginalHeight (): number { return this.NodeStackTop - this.NodeStackBottom; },
    OriginalBellWidth: ,
    OriginalBaseWidth: ,
    PlumeSizeMultiplier: ,
    PlumePositionOffset: ,
    NodeStackTop: ,
    NodeStackBottom: ,
    ModelPath: "GenericEngines/models/",
    ModelFiles: [
        "files/models/",
        "files/models/",
        "files/models/"
    ],
    TextureDefinitions: "",
    ThrustTransformName: "thrustTransform",
    GimbalTransformName: "",
    ModelName: "",
    ModelType: EngineGroupType.,
    HiddenMuObjects: [
        ""
    ],
    CanAttachOnModel: false,
    OriginalTankVolume: 0,
    RadialAttachment: false,
    RadialAttachmentPoint: 0,
    ImageSource: "img/modelPreviews/.webp",
    get ImageLabel(): string { return this.ModelName },
    HeatAnimations: []
}
*/