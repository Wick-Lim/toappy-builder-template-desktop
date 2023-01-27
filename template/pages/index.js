import Renderer from "../src/components/Viewer/renderer";

const sampleData = {
  "items": [
      {
          "properties": {
              "position": "sticky"
          },
          "items": [
              {
                  "component": "Typography",
                  "properties": {
                      "text": "Sample App",
                      "variant": "h6"
                  }
              },
              {
                  "component": "Expanded"
              },
              {
                  "properties": {
                      "icon": "Menu",
                      "color": "inherit"
                  },
                  "component": "IconButton"
              }
          ],
          "component": "AppBar"
      },
      {
          "properties": {
              "flex": 1,
              "alignItems": "center",
              "justifyContent": "center"
          },
          "component": "Column",
          "items": [
              {
                  "component": "Typography",
                  "properties": {
                      "text": "Sample",
                      "variant": "h6"
                  }
              }
          ]
      },
      {
          "component": "Divider"
      },
      {
          "component": "BottomNavigation",
          "properties": {
              "value": 0,
              "showLabels": true,
              "actions": [
                  "Recents",
                  "Favorites",
                  "Nearby"
              ]
          }
      }
  ],
  "name": "Sample Page"
};

export default function Home() {
  return (
    <Renderer data={sampleData} pid='r-0' production />
  )
}
