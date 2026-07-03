# 核心功能

## 键鼠录制

![](core-features/PixPin_2026-07-01_20-45-47.webp)

![](core-features/PixPin_2026-07-01_20-51-39.webp)

## 绘制文字

![](core-features/PixPin_2026-07-01_21-06-16.webp)

::: details JSON
```json:line-numbers
{
  "format": "VirmathElf",
  "version": 8,
  "nodes": [
    {
      "$type": "End",
      "id": "019f0886-6946-77c3-be17-18402e7edab1",
      "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "location": {
        "X": 975,
        "Y": 165
      },
      "size": {
        "Width": 90.66666666666667,
        "Height": 58.666666666666664
      },
      "inputs": [
        {
          "$type": "Order",
          "value": null,
          "id": "019f0886-6946-7500-9074-12951da1b34b",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f0886-6946-77c3-be17-18402e7edab1",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 1,
          "connections": [
            "019f1dc2-f42f-7ffe-850b-6fa582895f92"
          ],
          "anchor": {
            "X": 992,
            "Y": 207.33333333333334
          },
          "isConnected": true,
          "layoutOrientation": 0,
          "valueEditor": null
        }
      ],
      "outputs": []
    },
    {
      "$type": "CreateMat",
      "id": "019f1dc2-97fa-7af6-9757-e48820df9adb",
      "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "location": {
        "X": -225,
        "Y": 255
      },
      "size": {
        "Width": 314.6666666666667,
        "Height": 187.33333333333334
      },
      "inputs": [
        {
          "$type": "Vector2Int64",
          "value": {
            "x": 400,
            "y": 400
          },
          "id": "019f1dc2-97fa-7b76-b82c-2d2460ac859d",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dc2-97fa-7af6-9757-e48820df9adb",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 1,
          "connections": [],
          "anchor": {
            "X": 0,
            "Y": 0
          },
          "isConnected": false,
          "layoutOrientation": 1,
          "valueEditor": null
        },
        {
          "$type": "Int64",
          "Value": 4278190080,
          "id": "019f1dc2-97fa-7d34-ab3b-4d8c82caca6a",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dc2-97fa-7af6-9757-e48820df9adb",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 1,
          "connections": [],
          "anchor": {
            "X": 0,
            "Y": 0
          },
          "isConnected": false,
          "layoutOrientation": 0,
          "valueEditor": {
            "$type": "Color"
          },
          "value": 4278190080
        }
      ],
      "outputs": [
        {
          "$type": "NativeObject",
          "value": {
            "objectType": 8
          },
          "traitFlags": 0,
          "id": "019f1dc2-97fa-78f9-9213-1cf52ce98329",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dc2-97fa-7af6-9757-e48820df9adb",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 2,
          "connections": [
            "019f1dc2-ee86-7fa3-9893-fc911e300e8f",
            "019f1dc3-5e76-7ef6-9030-c1e29f6f0337"
          ],
          "anchor": {
            "X": 72.66666666666669,
            "Y": 297.3333333333333
          },
          "isConnected": true,
          "layoutOrientation": 0,
          "valueEditor": null
        }
      ]
    },
    {
      "$type": "ShowImage",
      "id": "019f1dc2-dc34-709b-9f67-66ae4ff13a78",
      "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "location": {
        "X": 690,
        "Y": 165
      },
      "size": {
        "Width": 238,
        "Height": 115.33333333333333
      },
      "inputs": [
        {
          "$type": "Order",
          "value": null,
          "id": "019f1dc2-dc35-7abd-988e-9a65cee0b08f",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dc2-dc34-709b-9f67-66ae4ff13a78",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 1,
          "connections": [
            "019f1dc3-53da-72a8-8e44-583157778648"
          ],
          "anchor": {
            "X": 707,
            "Y": 207.33333333333334
          },
          "isConnected": true,
          "layoutOrientation": 0,
          "valueEditor": null
        },
        {
          "$type": "NativeObject",
          "value": {
            "objectType": 8
          },
          "traitFlags": 0,
          "id": "019f1dc2-dc35-724d-8d20-1698b3c3ab58",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dc2-dc34-709b-9f67-66ae4ff13a78",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 1,
          "connections": [
            "019f1dc2-ee86-7fa3-9893-fc911e300e8f"
          ],
          "anchor": {
            "X": 707,
            "Y": 235.33333333333331
          },
          "isConnected": true,
          "layoutOrientation": 0,
          "valueEditor": null
        },
        {
          "$type": "Bool",
          "value": true,
          "id": "019f1dc2-dc35-7af2-b272-91c3699af4d1",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dc2-dc34-709b-9f67-66ae4ff13a78",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 1,
          "connections": [],
          "anchor": {
            "X": 0,
            "Y": 0
          },
          "isConnected": false,
          "layoutOrientation": 0,
          "valueEditor": null
        }
      ],
      "outputs": [
        {
          "$type": "Order",
          "value": null,
          "id": "019f1dc2-dc35-7c1a-8672-7d5b42aed59c",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dc2-dc34-709b-9f67-66ae4ff13a78",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 2,
          "connections": [
            "019f1dc2-f42f-7ffe-850b-6fa582895f92"
          ],
          "anchor": {
            "X": 910.3333333333334,
            "Y": 207.33333333333334
          },
          "isConnected": true,
          "layoutOrientation": 0,
          "valueEditor": null
        }
      ]
    },
    {
      "$type": "DrawText",
      "id": "019f1dc3-378a-7ebd-903b-8d8fd61b25f9",
      "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "location": {
        "X": 255,
        "Y": 165
      },
      "size": {
        "Width": 306,
        "Height": 350
      },
      "inputs": [
        {
          "$type": "Order",
          "value": null,
          "id": "019f1dc3-378b-76e8-ba05-6efc8286ae76",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dc3-378a-7ebd-903b-8d8fd61b25f9",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 1,
          "connections": [],
          "anchor": {
            "X": 332,
            "Y": 147.33333333333334
          },
          "isConnected": false,
          "layoutOrientation": 0,
          "valueEditor": null
        },
        {
          "$type": "NativeObject",
          "value": {
            "objectType": 8
          },
          "traitFlags": 0,
          "id": "019f1dc3-378b-71a2-a2eb-70bec785539a",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dc3-378a-7ebd-903b-8d8fd61b25f9",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 1,
          "connections": [
            "019f1dc3-5e76-7ef6-9030-c1e29f6f0337"
          ],
          "anchor": {
            "X": 272,
            "Y": 235.33333333333331
          },
          "isConnected": true,
          "layoutOrientation": 0,
          "valueEditor": null
        },
        {
          "$type": "String",
          "value": "你好！",
          "id": "019f1dc3-378b-7e13-b3b0-e1d9218f7ce3",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dc3-378a-7ebd-903b-8d8fd61b25f9",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 1,
          "connections": [],
          "anchor": {
            "X": 0,
            "Y": 0
          },
          "isConnected": false,
          "layoutOrientation": 0,
          "valueEditor": null
        },
        {
          "$type": "Vector2Int64",
          "value": {
            "x": 0,
            "y": 200
          },
          "id": "019f1dc3-378b-7f66-8379-1ea8b553c772",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dc3-378a-7ebd-903b-8d8fd61b25f9",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 1,
          "connections": [],
          "anchor": {
            "X": 0,
            "Y": 0
          },
          "isConnected": false,
          "layoutOrientation": 1,
          "valueEditor": null
        },
        {
          "$type": "Float64",
          "value": 1,
          "id": "019f1dc3-378b-7eb7-bde7-791e461652d0",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dc3-378a-7ebd-903b-8d8fd61b25f9",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 1,
          "connections": [],
          "anchor": {
            "X": 0,
            "Y": 0
          },
          "isConnected": false,
          "layoutOrientation": 0,
          "valueEditor": null
        },
        {
          "$type": "Int64",
          "Value": 4294967295,
          "id": "019f1dc3-378b-76f7-aeed-238b009159ab",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dc3-378a-7ebd-903b-8d8fd61b25f9",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 1,
          "connections": [],
          "anchor": {
            "X": 0,
            "Y": 0
          },
          "isConnected": false,
          "layoutOrientation": 0,
          "valueEditor": {
            "$type": "Color"
          },
          "value": 4294967295
        },
        {
          "$type": "Int64",
          "Value": 1,
          "id": "019f1dc3-378b-7b09-9f2e-afe94da85c74",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dc3-378a-7ebd-903b-8d8fd61b25f9",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 1,
          "connections": [],
          "anchor": {
            "X": 0,
            "Y": 0
          },
          "isConnected": false,
          "layoutOrientation": 0,
          "valueEditor": null,
          "value": 1
        }
      ],
      "outputs": [
        {
          "$type": "Order",
          "value": null,
          "id": "019f1dc3-378b-7e1c-b801-5dfd9e03696f",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dc3-378a-7ebd-903b-8d8fd61b25f9",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 2,
          "connections": [
            "019f1dc3-53da-72a8-8e44-583157778648"
          ],
          "anchor": {
            "X": 543.3333333333334,
            "Y": 207.33333333333334
          },
          "isConnected": true,
          "layoutOrientation": 0,
          "valueEditor": null
        }
      ]
    }
  ],
  "connections": [
    {
      "id": "019f1dc2-f42f-7ffe-850b-6fa582895f92",
      "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "sourceNodeId": "019f1dc2-dc34-709b-9f67-66ae4ff13a78",
      "targetNodeId": "019f0886-6946-77c3-be17-18402e7edab1",
      "sourceId": "019f1dc2-dc35-7c1a-8672-7d5b42aed59c",
      "targetId": "019f0886-6946-7500-9074-12951da1b34b"
    },
    {
      "id": "019f1dc3-53da-72a8-8e44-583157778648",
      "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "sourceNodeId": "019f1dc3-378a-7ebd-903b-8d8fd61b25f9",
      "targetNodeId": "019f1dc2-dc34-709b-9f67-66ae4ff13a78",
      "sourceId": "019f1dc3-378b-7e1c-b801-5dfd9e03696f",
      "targetId": "019f1dc2-dc35-7abd-988e-9a65cee0b08f"
    },
    {
      "id": "019f1dc2-ee86-7fa3-9893-fc911e300e8f",
      "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "sourceNodeId": "019f1dc2-97fa-7af6-9757-e48820df9adb",
      "targetNodeId": "019f1dc2-dc34-709b-9f67-66ae4ff13a78",
      "sourceId": "019f1dc2-97fa-78f9-9213-1cf52ce98329",
      "targetId": "019f1dc2-dc35-724d-8d20-1698b3c3ab58"
    },
    {
      "id": "019f1dc3-5e76-7ef6-9030-c1e29f6f0337",
      "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "sourceNodeId": "019f1dc2-97fa-7af6-9757-e48820df9adb",
      "targetNodeId": "019f1dc3-378a-7ebd-903b-8d8fd61b25f9",
      "sourceId": "019f1dc2-97fa-78f9-9213-1cf52ce98329",
      "targetId": "019f1dc3-378b-71a2-a2eb-70bec785539a"
    }
  ]
}
```
:::

## 绘制矩形框

![](core-features/PixPin_2026-07-01_21-13-41.webp)

::: details JSON
```json:line-numbers
{
  "format": "VirmathElf",
  "version": 8,
  "nodes": [
    {
      "$type": "End",
      "id": "019f1dce-84fe-7ff2-a976-37a445e2f575",
      "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "location": {
        "X": 975,
        "Y": 180
      },
      "size": {
        "Width": 90.66666666666667,
        "Height": 58.666666666666664
      },
      "inputs": [
        {
          "$type": "Order",
          "value": null,
          "id": "019f1dce-84fe-787a-b4f7-771fcaeb0c2c",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dce-84fe-7ff2-a976-37a445e2f575",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 1,
          "connections": [
            "019f1dce-8dcf-7811-8ad5-7f4a252fa596"
          ],
          "anchor": {
            "X": 992,
            "Y": 222.33333333333334
          },
          "isConnected": true,
          "layoutOrientation": 0,
          "valueEditor": null
        }
      ],
      "outputs": []
    },
    {
      "$type": "DrawRectangle",
      "id": "019f1dce-dec1-70a5-8cee-8e68e0cbc307",
      "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "location": {
        "X": 180,
        "Y": 150
      },
      "size": {
        "Width": 306,
        "Height": 336
      },
      "inputs": [
        {
          "$type": "Order",
          "value": null,
          "id": "019f1dce-dec2-79a8-8d57-38467e477592",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dce-dec1-70a5-8cee-8e68e0cbc307",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 1,
          "connections": [],
          "anchor": {
            "X": 0,
            "Y": 0
          },
          "isConnected": false,
          "layoutOrientation": 0,
          "valueEditor": null
        },
        {
          "$type": "NativeObject",
          "value": {
            "objectType": 8
          },
          "traitFlags": 0,
          "id": "019f1dce-dec2-7504-ae04-9a00def240cb",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dce-dec1-70a5-8cee-8e68e0cbc307",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 1,
          "connections": [
            "019f1dce-f898-7bfa-bc28-3d78664fac62"
          ],
          "anchor": {
            "X": 195,
            "Y": 218.33333333333331
          },
          "isConnected": true,
          "layoutOrientation": 0,
          "valueEditor": null
        },
        {
          "$type": "Vector4Int64",
          "value": {
            "x": 150,
            "y": 150,
            "z": 100,
            "w": 100
          },
          "id": "019f1dce-dec2-7a33-82e8-0c76228a31c1",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dce-dec1-70a5-8cee-8e68e0cbc307",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 1,
          "connections": [],
          "anchor": {
            "X": 0,
            "Y": 0
          },
          "isConnected": false,
          "layoutOrientation": 1,
          "valueEditor": null
        },
        {
          "$type": "Int64",
          "Value": 4294902290,
          "id": "019f1dce-dec2-7844-ab35-c872f7b13f6a",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dce-dec1-70a5-8cee-8e68e0cbc307",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 1,
          "connections": [],
          "anchor": {
            "X": 0,
            "Y": 0
          },
          "isConnected": false,
          "layoutOrientation": 0,
          "valueEditor": {
            "$type": "Color"
          },
          "value": 4294902290
        },
        {
          "$type": "Int64",
          "Value": 2,
          "id": "019f1dce-dec2-746c-92fd-a4811356522b",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dce-dec1-70a5-8cee-8e68e0cbc307",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 1,
          "connections": [],
          "anchor": {
            "X": 0,
            "Y": 0
          },
          "isConnected": false,
          "layoutOrientation": 0,
          "valueEditor": null,
          "value": 2
        }
      ],
      "outputs": [
        {
          "$type": "Order",
          "value": null,
          "id": "019f1dce-dec2-7820-8fdf-a89e9b9e95a0",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dce-dec1-70a5-8cee-8e68e0cbc307",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 2,
          "connections": [
            "019f1dcf-012c-7225-a235-8e57541fe410"
          ],
          "anchor": {
            "X": 466.33333333333337,
            "Y": 190.33333333333334
          },
          "isConnected": true,
          "layoutOrientation": 0,
          "valueEditor": null
        }
      ]
    },
    {
      "$type": "CreateMat",
      "id": "019f1dcd-8cfb-789e-bf8e-e210f0549485",
      "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "location": {
        "X": -262.5712818112337,
        "Y": 263.05400859476663
      },
      "size": {
        "Width": 314.6666666666667,
        "Height": 187.33333333333334
      },
      "inputs": [
        {
          "$type": "Vector2Int64",
          "value": {
            "x": 400,
            "y": 400
          },
          "id": "019f1dcd-8cfb-7bfa-b18b-4c030a83d1ee",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dcd-8cfb-789e-bf8e-e210f0549485",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 1,
          "connections": [],
          "anchor": {
            "X": 0,
            "Y": 0
          },
          "isConnected": false,
          "layoutOrientation": 1,
          "valueEditor": null
        },
        {
          "$type": "Int64",
          "Value": 4278190080,
          "id": "019f1dcd-8cfb-76ec-96cf-9198a030df51",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dcd-8cfb-789e-bf8e-e210f0549485",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 1,
          "connections": [],
          "anchor": {
            "X": 0,
            "Y": 0
          },
          "isConnected": false,
          "layoutOrientation": 0,
          "valueEditor": {
            "$type": "Color"
          },
          "value": 4278190080
        }
      ],
      "outputs": [
        {
          "$type": "NativeObject",
          "value": {
            "objectType": 8
          },
          "traitFlags": 0,
          "id": "019f1dcd-8cfb-79d0-b674-790c91139f96",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dcd-8cfb-789e-bf8e-e210f0549485",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 2,
          "connections": [
            "019f1dce-f898-7bfa-bc28-3d78664fac62",
            "019f1dcd-8cfb-70cb-aa91-08b17ade54b2"
          ],
          "anchor": {
            "X": 33.095384855433,
            "Y": 303.38734192809994
          },
          "isConnected": true,
          "layoutOrientation": 0,
          "valueEditor": null
        }
      ]
    },
    {
      "$type": "ShowImage",
      "id": "019f1dcd-8cfb-7590-b459-6e4cad0f1104",
      "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "location": {
        "X": 652.4287181887662,
        "Y": 173.05400859476666
      },
      "size": {
        "Width": 238,
        "Height": 115.33333333333333
      },
      "inputs": [
        {
          "$type": "Order",
          "value": null,
          "id": "019f1dcd-8cfb-78d7-8a2a-535a94df6d53",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dcd-8cfb-7590-b459-6e4cad0f1104",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 1,
          "connections": [
            "019f1dcf-012c-7225-a235-8e57541fe410"
          ],
          "anchor": {
            "X": 667.4287181887662,
            "Y": 213.3873419281
          },
          "isConnected": true,
          "layoutOrientation": 0,
          "valueEditor": null
        },
        {
          "$type": "NativeObject",
          "value": {
            "objectType": 8
          },
          "traitFlags": 0,
          "id": "019f1dcd-8cfb-7c66-95d1-cf6c1dcd12ff",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dcd-8cfb-7590-b459-6e4cad0f1104",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 1,
          "connections": [
            "019f1dcd-8cfb-70cb-aa91-08b17ade54b2"
          ],
          "anchor": {
            "X": 667.4287181887662,
            "Y": 241.3873419281
          },
          "isConnected": true,
          "layoutOrientation": 0,
          "valueEditor": null
        },
        {
          "$type": "Bool",
          "value": true,
          "id": "019f1dcd-8cfb-7b35-a53a-6d6afe25364c",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dcd-8cfb-7590-b459-6e4cad0f1104",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 1,
          "connections": [],
          "anchor": {
            "X": 0,
            "Y": 0
          },
          "isConnected": false,
          "layoutOrientation": 0,
          "valueEditor": null
        }
      ],
      "outputs": [
        {
          "$type": "Order",
          "value": null,
          "id": "019f1dcd-8cfb-74c5-ab42-b5935ca2e1ef",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dcd-8cfb-7590-b459-6e4cad0f1104",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 2,
          "connections": [
            "019f1dce-8dcf-7811-8ad5-7f4a252fa596"
          ],
          "anchor": {
            "X": 870.7620515220996,
            "Y": 213.3873419281
          },
          "isConnected": true,
          "layoutOrientation": 0,
          "valueEditor": null
        }
      ]
    }
  ],
  "connections": [
    {
      "id": "019f1dce-8dcf-7811-8ad5-7f4a252fa596",
      "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "sourceNodeId": "019f1dcd-8cfb-7590-b459-6e4cad0f1104",
      "targetNodeId": "019f1dce-84fe-7ff2-a976-37a445e2f575",
      "sourceId": "019f1dcd-8cfb-74c5-ab42-b5935ca2e1ef",
      "targetId": "019f1dce-84fe-787a-b4f7-771fcaeb0c2c"
    },
    {
      "id": "019f1dce-f898-7bfa-bc28-3d78664fac62",
      "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "sourceNodeId": "019f1dcd-8cfb-789e-bf8e-e210f0549485",
      "targetNodeId": "019f1dce-dec1-70a5-8cee-8e68e0cbc307",
      "sourceId": "019f1dcd-8cfb-79d0-b674-790c91139f96",
      "targetId": "019f1dce-dec2-7504-ae04-9a00def240cb"
    },
    {
      "id": "019f1dcf-012c-7225-a235-8e57541fe410",
      "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "sourceNodeId": "019f1dce-dec1-70a5-8cee-8e68e0cbc307",
      "targetNodeId": "019f1dcd-8cfb-7590-b459-6e4cad0f1104",
      "sourceId": "019f1dce-dec2-7820-8fdf-a89e9b9e95a0",
      "targetId": "019f1dcd-8cfb-78d7-8a2a-535a94df6d53"
    },
    {
      "id": "019f1dcd-8cfb-70cb-aa91-08b17ade54b2",
      "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "sourceNodeId": "019f1dcd-8cfb-789e-bf8e-e210f0549485",
      "targetNodeId": "019f1dcd-8cfb-7590-b459-6e4cad0f1104",
      "sourceId": "019f1dcd-8cfb-79d0-b674-790c91139f96",
      "targetId": "019f1dcd-8cfb-7c66-95d1-cf6c1dcd12ff"
    }
  ]
}
```
:::

## 图像识别

![](core-features/PixPin_2026-07-01_21-37-04.webp)

::: details JSON
```json:line-numbers
{
  "format": "VirmathElf",
  "version": 8,
  "nodes": [
    {
      "$type": "LoadImage",
      "id": "019f1dd9-a0a8-7abd-af73-1c7237b31204",
      "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "location": {
        "X": -210,
        "Y": 30
      },
      "size": {
        "Width": 277.3333333333333,
        "Height": 225.33333333333334
      },
      "inputs": [
        {
          "$type": "String",
          "value": "",
          "id": "019f1dd9-a0a8-7d69-9688-bd6469012952",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dd9-a0a8-7abd-af73-1c7237b31204",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 1,
          "connections": [],
          "anchor": {
            "X": 0,
            "Y": 0
          },
          "isConnected": false,
          "layoutOrientation": 1,
          "valueEditor": {
            "$type": "ImagePath"
          }
        }
      ],
      "outputs": [
        {
          "$type": "NativeObject",
          "value": {
            "objectType": 8
          },
          "traitFlags": 0,
          "id": "019f1dd9-a0a9-70fa-9ebc-3bc6903585ef",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dd9-a0a8-7abd-af73-1c7237b31204",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 2,
          "connections": [],
          "anchor": {
            "X": 0,
            "Y": 0
          },
          "isConnected": false,
          "layoutOrientation": 0,
          "valueEditor": null
        },
        {
          "$type": "NativeObject",
          "value": {
            "objectType": 8
          },
          "traitFlags": 0,
          "id": "019f1dd9-a0a9-74f5-a89c-6115f4f3962f",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dd9-a0a8-7abd-af73-1c7237b31204",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 2,
          "connections": [
            "019f1dda-1b4c-7813-a364-afc179b7c8ed"
          ],
          "anchor": {
            "X": 50.33333333333337,
            "Y": 97.66666666666667
          },
          "isConnected": true,
          "layoutOrientation": 0,
          "valueEditor": null
        },
        {
          "$type": "NativeObject",
          "value": {
            "objectType": 8
          },
          "traitFlags": 0,
          "id": "019f1dd9-a0a9-7a99-9822-aa8f511df45c",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dd9-a0a8-7abd-af73-1c7237b31204",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 2,
          "connections": [],
          "anchor": {
            "X": 0,
            "Y": 0
          },
          "isConnected": false,
          "layoutOrientation": 0,
          "valueEditor": null
        },
        {
          "$type": "Vector2Int64",
          "value": {
            "x": 0,
            "y": 0
          },
          "id": "019f1dd9-a0a9-7ff5-92f3-3303866a3e8f",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dd9-a0a8-7abd-af73-1c7237b31204",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 2,
          "connections": [],
          "anchor": {
            "X": 0,
            "Y": 0
          },
          "isConnected": false,
          "layoutOrientation": 1,
          "valueEditor": null
        }
      ]
    },
    {
      "$type": "LoadImage",
      "id": "019f1dd9-dd2c-7dd2-b78d-562637cbaab4",
      "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "location": {
        "X": -210,
        "Y": 285
      },
      "size": {
        "Width": 277.3333333333333,
        "Height": 225.33333333333334
      },
      "inputs": [
        {
          "$type": "String",
          "value": "",
          "id": "019f1dd9-dd2c-7095-ac1e-110104fe83b4",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dd9-dd2c-7dd2-b78d-562637cbaab4",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 1,
          "connections": [],
          "anchor": {
            "X": -193,
            "Y": 327.3333333333333
          },
          "isConnected": false,
          "layoutOrientation": 1,
          "valueEditor": {
            "$type": "ImagePath"
          }
        }
      ],
      "outputs": [
        {
          "$type": "NativeObject",
          "value": {
            "objectType": 8
          },
          "traitFlags": 0,
          "id": "019f1dd9-dd2d-7ce9-a360-c5dfe15ff119",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dd9-dd2c-7dd2-b78d-562637cbaab4",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 2,
          "connections": [],
          "anchor": {
            "X": 0,
            "Y": 0
          },
          "isConnected": false,
          "layoutOrientation": 0,
          "valueEditor": null
        },
        {
          "$type": "NativeObject",
          "value": {
            "objectType": 8
          },
          "traitFlags": 0,
          "id": "019f1dd9-dd2d-7db4-a905-5445bb0a7715",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dd9-dd2c-7dd2-b78d-562637cbaab4",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 2,
          "connections": [
            "019f1dda-075d-7f09-bfea-b1b7c0169a40"
          ],
          "anchor": {
            "X": 50.33333333333337,
            "Y": 352.6666666666667
          },
          "isConnected": true,
          "layoutOrientation": 0,
          "valueEditor": null
        },
        {
          "$type": "NativeObject",
          "value": {
            "objectType": 8
          },
          "traitFlags": 0,
          "id": "019f1dd9-dd2d-7a65-a340-c3636ac94b08",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dd9-dd2c-7dd2-b78d-562637cbaab4",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 2,
          "connections": [],
          "anchor": {
            "X": 0,
            "Y": 0
          },
          "isConnected": false,
          "layoutOrientation": 0,
          "valueEditor": null
        },
        {
          "$type": "Vector2Int64",
          "value": {
            "x": 0,
            "y": 0
          },
          "id": "019f1dd9-dd2d-7634-85c9-593cb48d0349",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dd9-dd2c-7dd2-b78d-562637cbaab4",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 2,
          "connections": [],
          "anchor": {
            "X": 0,
            "Y": 0
          },
          "isConnected": false,
          "layoutOrientation": 1,
          "valueEditor": null
        }
      ]
    },
    {
      "$type": "TemplateMatch",
      "id": "019f1dd9-f715-7872-a211-14a78a359512",
      "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "location": {
        "X": 150,
        "Y": 210
      },
      "size": {
        "Width": 276.6666666666667,
        "Height": 182.66666666666666
      },
      "inputs": [
        {
          "$type": "NativeObject",
          "value": {
            "objectType": 8
          },
          "traitFlags": 0,
          "id": "019f1dd9-f715-739d-895c-c87c447c1bb2",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dd9-f715-7872-a211-14a78a359512",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 1,
          "connections": [
            "019f1dda-1b4c-7813-a364-afc179b7c8ed"
          ],
          "anchor": {
            "X": 167,
            "Y": 252.33333333333334
          },
          "isConnected": true,
          "layoutOrientation": 0,
          "valueEditor": null
        },
        {
          "$type": "NativeObject",
          "value": {
            "objectType": 8
          },
          "traitFlags": 0,
          "id": "019f1dd9-f715-7031-b332-115d593f2485",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dd9-f715-7872-a211-14a78a359512",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 1,
          "connections": [],
          "anchor": {
            "X": 355.40243227457677,
            "Y": 298.24522991305037
          },
          "isConnected": false,
          "layoutOrientation": 0,
          "valueEditor": null
        },
        {
          "$type": "NativeObject",
          "value": {
            "objectType": 8
          },
          "traitFlags": 0,
          "id": "019f1dd9-f715-724c-a747-1c972913be26",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dd9-f715-7872-a211-14a78a359512",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 1,
          "connections": [
            "019f1dda-075d-7f09-bfea-b1b7c0169a40"
          ],
          "anchor": {
            "X": 167,
            "Y": 305.6666666666667
          },
          "isConnected": true,
          "layoutOrientation": 0,
          "valueEditor": null
        },
        {
          "$type": "Float64",
          "value": 0.9,
          "id": "019f1dd9-f715-7f07-a7d8-ab0d2b35d484",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dd9-f715-7872-a211-14a78a359512",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 1,
          "connections": [],
          "anchor": {
            "X": 0,
            "Y": 0
          },
          "isConnected": false,
          "layoutOrientation": 0,
          "valueEditor": null
        },
        {
          "$type": "Float64",
          "value": 0.7,
          "id": "019f1dd9-f715-7dec-b02d-9bac68cfafec",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dd9-f715-7872-a211-14a78a359512",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 1,
          "connections": [],
          "anchor": {
            "X": 0,
            "Y": 0
          },
          "isConnected": false,
          "layoutOrientation": 0,
          "valueEditor": null
        }
      ],
      "outputs": [
        {
          "$type": "JsonArray",
          "value": null,
          "id": "019f1dd9-f716-712e-9e59-55ba3c340389",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dd9-f715-7872-a211-14a78a359512",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 2,
          "connections": [
            "019f1dda-667c-7032-b88d-bc7361429063"
          ],
          "anchor": {
            "X": 409.6666666666667,
            "Y": 252.33333333333334
          },
          "isConnected": true,
          "layoutOrientation": 0,
          "valueEditor": null
        }
      ]
    },
    {
      "$type": "Log",
      "id": "019f1dda-4e12-7d4b-bda3-5ed12c3bc01b",
      "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "location": {
        "X": 495,
        "Y": 180
      },
      "size": {
        "Width": 254,
        "Height": 121.33333333333333
      },
      "inputs": [
        {
          "$type": "Order",
          "value": null,
          "id": "019f1dda-4e12-776f-b37c-ef92e32e7127",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dda-4e12-7d4b-bda3-5ed12c3bc01b",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 1,
          "connections": [],
          "anchor": {
            "X": 666.1228593990884,
            "Y": 278.4908448902086
          },
          "isConnected": false,
          "layoutOrientation": 0,
          "valueEditor": null
        },
        {
          "$type": "String",
          "value": "{}",
          "id": "019f1dda-4e13-70df-b86f-31e9d2856012",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dda-4e12-7d4b-bda3-5ed12c3bc01b",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 1,
          "connections": [],
          "anchor": {
            "X": 0,
            "Y": 0
          },
          "isConnected": false,
          "layoutOrientation": 0,
          "valueEditor": null
        },
        {
          "$type": "String",
          "value": "Hello",
          "id": "019f1dda-5134-7205-aac6-eacca9a15f07",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dda-4e12-7d4b-bda3-5ed12c3bc01b",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 1,
          "connections": [
            "019f1dda-667c-7032-b88d-bc7361429063"
          ],
          "anchor": {
            "X": 512,
            "Y": 286.33333333333337
          },
          "isConnected": true,
          "layoutOrientation": 0,
          "valueEditor": null
        }
      ],
      "outputs": [
        {
          "$type": "Order",
          "value": null,
          "id": "019f1dda-4e13-7d7c-bcda-4b57a53f1c75",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dda-4e12-7d4b-bda3-5ed12c3bc01b",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 2,
          "connections": [
            "019f1dda-5427-7037-97f4-f5f1ae4c2181"
          ],
          "anchor": {
            "X": 731.3333333333334,
            "Y": 222.33333333333334
          },
          "isConnected": true,
          "layoutOrientation": 0,
          "valueEditor": null
        }
      ]
    },
    {
      "$type": "End",
      "id": "019f1dce-84fe-7ff2-a976-37a445e2f575",
      "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "location": {
        "X": 780,
        "Y": 180
      },
      "size": {
        "Width": 90.66666666666667,
        "Height": 58.666666666666664
      },
      "inputs": [
        {
          "$type": "Order",
          "value": null,
          "id": "019f1dce-84fe-787a-b4f7-771fcaeb0c2c",
          "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
          "nodeId": "019f1dce-84fe-7ff2-a976-37a445e2f575",
          "optionId": "00000000-0000-0000-0000-000000000000",
          "optionIndex": 0,
          "usageType": 1,
          "connections": [
            "019f1dda-5427-7037-97f4-f5f1ae4c2181"
          ],
          "anchor": {
            "X": 797,
            "Y": 222.33333333333334
          },
          "isConnected": true,
          "layoutOrientation": 0,
          "valueEditor": null
        }
      ],
      "outputs": []
    }
  ],
  "connections": [
    {
      "id": "019f1dda-1b4c-7813-a364-afc179b7c8ed",
      "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "sourceNodeId": "019f1dd9-a0a8-7abd-af73-1c7237b31204",
      "targetNodeId": "019f1dd9-f715-7872-a211-14a78a359512",
      "sourceId": "019f1dd9-a0a9-74f5-a89c-6115f4f3962f",
      "targetId": "019f1dd9-f715-739d-895c-c87c447c1bb2"
    },
    {
      "id": "019f1dda-075d-7f09-bfea-b1b7c0169a40",
      "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "sourceNodeId": "019f1dd9-dd2c-7dd2-b78d-562637cbaab4",
      "targetNodeId": "019f1dd9-f715-7872-a211-14a78a359512",
      "sourceId": "019f1dd9-dd2d-7db4-a905-5445bb0a7715",
      "targetId": "019f1dd9-f715-724c-a747-1c972913be26"
    },
    {
      "id": "019f1dda-667c-7032-b88d-bc7361429063",
      "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "sourceNodeId": "019f1dd9-f715-7872-a211-14a78a359512",
      "targetNodeId": "019f1dda-4e12-7d4b-bda3-5ed12c3bc01b",
      "sourceId": "019f1dd9-f716-712e-9e59-55ba3c340389",
      "targetId": "019f1dda-5134-7205-aac6-eacca9a15f07"
    },
    {
      "id": "019f1dda-5427-7037-97f4-f5f1ae4c2181",
      "programId": "019f0886-6943-76f7-a6d3-51011cbd8d63",
      "sourceNodeId": "019f1dda-4e12-7d4b-bda3-5ed12c3bc01b",
      "targetNodeId": "019f1dce-84fe-7ff2-a976-37a445e2f575",
      "sourceId": "019f1dda-4e13-7d7c-bcda-4b57a53f1c75",
      "targetId": "019f1dce-84fe-787a-b4f7-771fcaeb0c2c"
    }
  ]
}
```
:::

## 对象识别

## 文本识别