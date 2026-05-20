import { createSlice } from "@reduxjs/toolkit";

const savedData = localStorage.getItem("designData");

const initialState = savedData
  ? JSON.parse(savedData)
  : {
      urls: {
        gate: {
          Gate1: {
            url: "https://media.gettyimages.com/id/982639338/vector/art-nouveau-iron-gate-vector.jpg?s=612x612&w=0&k=20&c=dLQs5Ed6hHBBivf2zjRCC7PhMR3q1M-y7skohv8hihs=",
            description: "",
            uses: "",
          },
          Gate2: {
            url: "https://media.gettyimages.com/id/1053054246/vector/wrought-iron-gate-metal.jpg?s=612x612&w=0&k=20&c=Qo8cb-dvpujuIi59bNvdDzGX3WNtaIF4mRnSVv4XuBs=",
            description: "",
            uses: "",
          },
          Gate3: {
            url: "https://media.gettyimages.com/id/2253637192/photo/wrought-iron-gate-and-brick-entryway-in-chelsea.jpg?s=612x612&w=0&k=20&c=JCgp3xnPyw-6gdJNuw0S8gNRyYChkDsxhzIze2uSS9Q=",
            description: "",
            uses: "",
          },
          Gate4: {
            url: "https://media.gettyimages.com/id/1128875420/vector/art-nouveau-fence.jpg?s=612x612&w=0&k=20&c=5DQdcotiJkROEe5z1aj8NHW4pHCiXe_xkOFRfXl6-kk=",
            description: "",
            uses: "",
          },
        },
        shutter: {
          Shutter1: {
            url: "https://media.gettyimages.com/id/165981490/photo/rolled-steel-shutter-door.jpg?s=612x612&w=0&k=20&c=0lgteL0JCuoWJlNdXLv70BfIdaiAay7XBpUn2w1VaeU=",
            description: "",
            uses: "",
          },
          Shutter2: {
            url: "https://media.gettyimages.com/id/987730228/photo/metal-background.jpg?s=612x612&w=gi&k=20&c=NTpo-jrgzeYFdLWpOJAImjbRMeobGo8tC23XnxHCmuM=",
            description: "",
            uses: "",
          },
          Shutter3: {
            url: "https://media.gettyimages.com/id/998939564/photo/shutter-steel-metal-door-texture-as-a-background.jpg?s=612x612&w=0&k=20&c=hJpTFvkaYT01uPGq1BQFDdQaC15b-ww0Qx20ctG3FO8=",
            description: "",
            uses: "",
          },
          Shutter4: {
            url: "https://media.gettyimages.com/id/1308488220/photo/golden-metallic-rolling-door.jpg?s=612x612&w=0&k=20&c=DJoKrzziTiXppfQOHvP6N8I6Cgj2G0DdcAY7ZdqMU84=",
            description: "",
            uses: "",
          },
        },
        grill: {
          Grill1: {
            url: "https://media.gettyimages.com/id/167767993/photo/iron-grate-close-up.jpg?s=612x612&w=0&k=20&c=k4haYQNcdPiuxTFokWjU9yxNGRDEpG7AJ2P7xl_Akpo=",
            description: "",
            uses: "",
          },
          Grill2: {
            url: "https://media.gettyimages.com/id/656242642/vector/wrought-iron.jpg?s=612x612&w=0&k=20&c=wjzRfeBkxwIDNP1mJj01YoJmAF4PHw28TUnGwRCsKK4=",
            description: "",
            uses: "",
          },
          Grill3: {
            url: "https://media.gettyimages.com/id/1192458565/vector/seamless-fence-vector.jpg?s=612x612&w=0&k=20&c=LpgHnWFgCN7q4CCCt3M_P5tSViQFqZRRbrwf7SwNVTY=",
            description: "",
            uses: "",
          },
          Grill4: {
            url: "https://media.gettyimages.com/id/1256289874/photo/wrought-iron-window-grill-in-marakkesh-morocco.jpg?s=612x612&w=0&k=20&c=j0QOAPd301HSy24hLrMGYQSNeZWvgfrZYEC7GhwoSlo=",
            description: "",
            uses: "",
          },
        },
        window: {
          Window1: {
            url: "https://media.gettyimages.com/id/167590098/vector/ornate-architectural-design.jpg?s=612x612&w=0&k=20&c=JfB68ELWvd2e7R0sputEbyAjzsYtuaXpf0wM-wDCfhw=",
            description: "",
            uses: "",
          },
          Window2: {
            url: "https://media.gettyimages.com/id/659111540/vector/wrought-iron.jpg?s=612x612&w=0&k=20&c=vZPvO3WlxZTP6gP1F_9wKpWuU9qKGOfy6XEDTgMJAyo=",
            description: "",
            uses: "",
          },
          Window3: {
            url: "https://media.gettyimages.com/id/1692506550/photo/window-with-white-metal-grates.jpg?s=612x612&w=0&k=20&c=eMZteQCJQKL0vwj60OFzCUyJDL-QaRWqZgLNmrfaUTk=",
            description: "",
            uses: "",
          },
          Window4: {
            url: "https://media.gettyimages.com/id/1364467272/photo/metalwork-in-a-colonial-window.jpg?s=612x612&w=0&k=20&c=HJopJG3NmTabXP-Aqb-diIg4cZWpCw6MpmkrHr5TBWM=",
            description: "",
            uses: "",
          },
        },
        ladder: {
          CrossLadder: {
            url: "https://media.gettyimages.com/id/2020483426/photo/green-metal-stairway.jpg?s=612x612&w=0&k=20&c=6qD7H72tFYuVrumP2ozyEQcq98Dijcdcdw9SLwaxRyI=",
            description: "",
            uses: "",
          },
          RoundLadder: {
            url: "https://media.gettyimages.com/id/2020483426/photo/green-metal-stairway.jpg?s=612x612&w=0&k=20&c=6qD7H72tFYuVrumP2ozyEQcq98Dijcdcdw9SLwaxRyI=",
            description: "",
            uses: "",
          },
          StraightLadder: {
            url: "https://media.gettyimages.com/id/2187863487/photo/red-metal-stairway-at-factory.jpg?s=612x612&w=0&k=20&c=nN5_HRz1FYzvrf6fGLDpSC5I4B9y3i1BLBjAmm4mkrg=",
            description: "",
            uses: "",
          },
          Ladder: {
            url: "https://media.gettyimages.com/id/1737005077/photo/steel-fire-escape-on-an-old-building.jpg?s=612x612&w=0&k=20&c=43BsuDXjWIWYCp1Pa32BpRDiFhBasSwMkcEkI64IsUg=",
            description: "",
            uses: "",
          },
        },
        welding: {
          ArcWelding: {
            url: "https://images.openai.com/static-rsc-4/NllDUtPSUnhwBwXv5vSPL26rZeCVB5HKtDyb9P1TQSU7-8tttIhVSL2_Cwva0y3RnHXngdxdAPsaqohhB_KJzU50Bnqh_7uoazZm_3D7RkTuTmQRO19w07dwIDVFHbj9RQTiOL6seFS1RMWJWqPAK1hL-ZMeBw2HjKNW-65MWzoHBLw5NEvD6Tl0fIkrFXqD?purpose=inline",
            description:
              "Uses an electric arc between a coated electrode and the metal surface.",
            uses: "Construction, repair work, pipelines.",
          },
          MIGWelding: {
            url: "https://images.openai.com/static-rsc-4/qGE3ZYlfnanalFxJ6RoZppHh3W90UbxfuSZkRLiGpeQQOsMVhWMs31k9rS1BD793boBXQzx4HxNJyuVDO7vNUnZ98t-aaUieVzC1n3D4r3I5xWbjTWAJFEnAKb969Cj0HG3OhtfvVRYdzedkuww5GMOQvPRYXmiW3-kBhHiOCqnPqMMNshyt-4iVTfMM0oFM?purpose=fullsize",
            description:
              "Uses a continuously fed wire electrode with shielding gas.",
            uses: "Automotive industry, fabrication, home workshops.",
          },
          TIGWelding: {
            url: "https://images.openai.com/static-rsc-4/sO1FsFzUsIdKWWtAWAE7F-v8dYaqy4u3pwwRQqUpPsGl2eP3hH2bZifDXR61ZNKDCqsyReZZMTP-gdZ23TfCfxOyXvBbvt5nAMjUupIAr-zFiYmN_eo__6cHjb1i-VXANXM_bBXlyy0R1tKqCU8b_L7pvcuQGE676P6HTeyya_0?purpose=inline",
            description:
              "Uses a tungsten electrode and separate filler rod for precise welding.",
            uses: "Aerospace, stainless steel, aluminum welding.",
          },
          GasWelding: {
            url: "https://images.openai.com/static-rsc-4/FIi4UE-_alCpb-0ZjTYIs1yGCd4XtK1rCOYN8ksR7ilUCV7VB4pR_PISXv9r5VRSEcn09zxPJ-80s1F1qJkpqXGtw0O9aWyO17xQm5ucWDXfdv5m0rbPivEBpLSvTk6p1p_NNHTs6uoUGn4kBm48V1lveikXPax2srPdozkWu2BE88ACNv7gmf48TrscFPF2?purpose=inline",
            description: "Uses fuel gas and oxygen flame to melt metals.",
            uses: "Metal repair, plumbing, thin sheet welding.",
          },
          ResistanceSpotWelding: {
            url: "https://images.openai.com/static-rsc-4/FFdEc0fExyp3oumwZZL-NDtpfsBsP2S8HU67NYiIodLlNvnjd2huICjpXZgZz6Xof7tEVndJxY-i-hrVsFX3bD3tCYOQn5iNPb_S1hvgk-gdeIcP3M32uQXp6wl2m6ZH7zIGwLmU5T1S3dZcdVicPfthxbOKh1bL3bSZZkv-ShI1bXrsr7ekLsJEifPA_PiZ?purpose=fullsize",
            description:
              "Joins metal sheets using pressure and electric current.",
            uses: "Car manufacturing and sheet metal work.",
          },
          LaserWelding: {
            url: "https://images.openai.com/static-rsc-4/n1-INwtUAxVWPRdFrHuZsY4YvScktLdbSibJbFo7U8TUtZVMR4dLownTm-0pMHDlJA1mIPmdfRT-EAFsnVQdqK5z1Sb3tcCad5IUDCC7VU6QDlzYfrIotb-MRd3fGrtkTOVn69jgolnOUA9CxeWwbt6J6JZbzLytxDvi1GQBqsnaCozC8_J6nW_CCgO6z7vY?purpose=inline",
            description:
              "Uses a concentrated laser beam for high-precision welding.",
            uses: "Electronics, medical devices, precision manufacturing.",
          },
        },
        otherservices: {
          Drilling: {
            url: "https://images.openai.com/static-rsc-4/OEQJbutI8x6jEc0CiinLJQq8FbyJTh8l-lfyJ_a63oq3oMoLuVv_ibFX9chXjylKUmk0oiY9CztQWSTm2cqHUgkAE-B8MM5IrcwtxaMNJuEjTrnEuWQo-0zlFTJzii4wEO5wygZlgiCawnB-Tr-8OJ7vtNb5HGH39hEvAMjRPg4?purpose=inline",
            description:
              "Drilling is a machining process used to create round holes in metal using a drill bit and drilling machine.",
            uses: "Construction, repair work, etc..",
          },

          TableFrame: {
            url: "https://images.openai.com/static-rsc-4/YQEJtyPn9SsEg9_BaG1ErtqDhIK_lfHnJpuzEPTcLBgiLzjRN8xzgwg7_cLFticQkcb5jRKI0CxZY_HD0S4fbs85AbWSz5wgsJEgcUarbXQiX1yBtNqzU8diSECKbC_G_bj39Ygyj2Ncez57D3rrQoA2NYDmSHXfF1hRj10mv7i6dgtxm5R4fTRjtF3ZZb6g?purpose=fullsize",
            description:
              "Strong and durable furniture table structures made using mild steel, wrought iron, or stainless steel frames.",
            uses: "Dining, Office, Workshop, and Center Table",
          },

          ShedFabrication: {
            url: "https://images.openai.com/static-rsc-4/HpeqqXqoRJAzOOBf2bN4PLGsfdTuOYXnooPZ9r23RI6Ny7RgdojCw2lLpmW5Zov5I9XjYqIo466lavXS073fgEzTbFLQBeDv7G_mVUnyVVSR8kcbvfts0UK0t2TYHrwSY1EFlrcmIjqtotQIXcPji4a_picyzkYtVJumhkpQFsc?purpose=inline",
            description:
              "Heavy-duty shed and roofing fabrication using steel structures.",
            uses: "Warehouse, Parking Shed, Industrial Shed",
          },

          SteelAlmirah: {
            url: "https://images.openai.com/static-rsc-4/bQ6sIxNS4bdt5pdWox-nJnUX28AWuBqnqbU1OW4yOmR5GRMqkqT2CAV4RWa_oQSgIZb6uq8ce8D9kKQLnaPzGW8PGkiEAWimdEhuF6vqIymzcP9VDPT1PR2EnU6BQ1UHo2eQYnczvL1X5J9fdcSsavOYeWXbteLnjCaYCZ8ATzdBVnoVQx9MgJW_YmKYiY4V?purpose=fullsize",
            description:
              "Custom steel storage almirahs and lockers made with strong metal sheets.",
            uses: "Home Storage, Office Storage, Industrial Use",
          },

          MetalCutting: {
            url: "https://images.openai.com/static-rsc-4/2eswGb91kVNE3ZoHocYQdYynt3o47xFQaPuNhxVrCtyplCmBhWR5f1Hl7M5R3fQmO-Kkl19Hwg3HsEWeMrfNduVPuANziOvkGwR6wxjQDuCnkr9eyoG95zciXsCINqGwUQI7lkt-5SUjqbbV9r6TkFe-Ostbp_dU_iHHEbOy8M0LPxmi1WetHgl636bPsOlF?purpose=inline",
            description:
              "Precision cutting services for metal sheets, rods, pipes, and structures.",
            uses: "Fabrication, Construction, Industrial Work",
          },

          GrindingPolishing: {
            url: "https://images.openai.com/static-rsc-4/k3G22u49Mz6lAbKwHjnlezW15thAuxuyOR5imJSYTQXEKIi8dMQAcNwRNrOyuzxW8tUB-kd91u9oatZO_e9Muh-vaByJATjJXPTg0Y1hxmKKqCeYn9aoOzsBsmlna5LhZhekKE0qIBb_-5B2IB-BSMKCxxhXxgO1mTl3a2YhOlW7RqFh5Udvg42ME1u_9UPR?purpose=inline",
            description:
              "Surface finishing process used to smooth and polish metal components.",
            uses: "Metal Finishing, Rust Removal, Surface Smoothing",
          },

          PipeBending: {
            url: "https://images.openai.com/static-rsc-4/LmDTMtv4PKoSY3Qj-CvpnM8k5LHHQXUltdwKEbJjWyewjlApYmG3bWxo3taPzZrJbNYuhrNzYaYZ1yIQrLoziRfphwqkbGlvaj69Rlmeh1BJteDoyIBEi7iVQpOnnulHdzroHN4hI4B56B0qJC4qKKfYDiLBY6VmJgo23aS51qNhmgqt4OIwOb1lVN_ebWqu?purpose=inline",
            description:
              "Pipe and tube bending services for fabrication and structural applications.",
            uses: "Railings, Furniture, Industrial Pipelines",
          },
        },
      },
    };

export const designSlice = createSlice({
  name: "design",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      const { category, productName, productData } = action.payload;

      if (!state.urls[category]) {
        state.urls[category] = {};
      }

      state.urls[category][productName] = productData;

      localStorage.setItem("designData", JSON.stringify(state));
    },
    editProducts: (state, action) => {
      const { category, productName, productData } = action.payload;

      state.urls[category][productName] = productData;

      localStorage.setItem("designData", JSON.stringify(state));
    },
    removeProducts: (state, action) => {
      const { category, productName } = action.payload;

      delete state.urls[category][productName];

      localStorage.setItem("designData", JSON.stringify(state));
    },
  },
});

export const { addProducts, editProducts, removeProducts } = designSlice.actions;

export default designSlice.reducer;
