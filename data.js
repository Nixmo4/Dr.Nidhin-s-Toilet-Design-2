var APP_DATA = {
  "scenes": [
    {
      "id": "0-dry-area",
      "name": "Dry Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.004246625575284213,
        "pitch": 0.37905770347804335,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": -1.058485806857668,
          "pitch": 0.26415941432071044,
          "rotation": 0.7853981633974483,
          "target": "1-wet-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-wet-area",
      "name": "Wet Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.17328459827427523,
        "pitch": -0.1386229476320331,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": 1.449216830064941,
          "pitch": 0.16996125191875855,
          "rotation": 4.71238898038469,
          "target": "0-dry-area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Dr. Nidhin's Toilet Design 2",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
