module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "Primary": {
          "100": "#003EB3",
          "300": "#0074F0",
          "500": "#14A9FF",
          "700": "#85DCFF",
          "vetopia": "#2f3b69ff"
        },
        "Danger": {
          "300": "#A22020",
          "500": "#BF2626",
          "700": "#E14747"
        },
        "Success": {
          "300": "#199033",
          "500": "#32A94C",
          "700": "#4CC366"
        },
        "Gray": {
          "500": "#595959",
          "700": "#999999",
          "900": "#D9D9D9",
          "White": "#FFFFFF",
          "Black": "#000000"
        },
        "foreground": "#000000",
        "background": "#FFFFFF"
      },
      "spacing": {
        "FourUnits": "64px",
        "SixUnits": "96px",
        "Unit": "16px",
        "FiveUnits": "80px",
        "HalfUnit": "8px",
        "OneAndHalfUnits": "24px",
        "ThreeUnits": "48px",
        "TwoUnits": "32px"
      },
      "borderRadius": {
        "Radius4": "4px",
        "Radius8": "8px",
        "Round": "50%",
        "Radius2": "2px"
      },
      "scale": {
        "XSmall": "16px",
        "XLarge": "192px",
        "Large": "144px",
        "XXLarge": "288px",
        "Small": "48px",
        "Medium": "96px",
        "MaxWidth": "1400px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./*.html"
  ]
}