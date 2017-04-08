import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let reports = [
      {
        "id": "20130101-20140101-60",
        "label": "General Labor",
        "value": 1615
      },
      {
        "id": "20130101-20140101-61",
        "label": "Painting (roller brush)",
        "value": 433
      },
      {
        "id": "20130101-20140101-62",
        "label": "Painting (spray)",
        "value": 7
      },
      {
        "id": "20130101-20140101-63",
        "label": "Drywall - Hanging Sheetrock",
        "value": 30
      },
      {
        "id": "20130101-20140101-64",
        "label": "Build retaining wall- Landscaping",
        "value": 16
      },
      {
        "id": "20130101-20140101-65",
        "label": "Carpentry  Framing and Cabinetry",
        "value": 56
      },
      {
        "id": "20130101-20140101-66",
        "label": "Brick masonry",
        "value": 29
      },
      {
        "id": "20130101-20140101-67",
        "label": "Deep and\/or Move in\/out Cleaning",
        "value": 1607
      },
      {
        "id": "20130101-20140101-68",
        "label": "Moving Furniture and Boxes",
        "value": 949
      },
      {
        "id": "20130101-20140101-69",
        "label": "Yardwork",
        "value": 1792
      },
      {
        "id": "20130101-20140101-70",
        "label": "z(do not use)Digging\/Weeding ",
        "value": 37
      },
      {
        "id": "20130101-20140101-71",
        "label": "z(Do not Use) DWC Chambita 1hr ",
        "value": 2
      },
      {
        "id": "20130101-20140101-72",
        "label": "z(Do not Use) DWC Chambita 2hr ",
        "value": 22
      },
      {
        "id": "20130101-20140101-73",
        "label": "z(Do not use)DWC Chambita 3hr ",
        "value": 85
      },
      {
        "id": "20130101-20140101-77",
        "label": "Demolition",
        "value": 147
      },
      {
        "id": "20130101-20140101-83",
        "label": "Advanced Gardening",
        "value": 489
      },
      {
        "id": "20130101-20140101-87",
        "label": "z(Do not Use) HHH Chambita 3hr",
        "value": 46
      },
      {
        "id": "20130101-20140101-88",
        "label": "Landscaping",
        "value": 152
      },
      {
        "id": "20130101-20140101-89",
        "label": "Roofing",
        "value": 10
      },
      {
        "id": "20130101-20140101-118",
        "label": "Party and Event help",
        "value": 61
      },
      {
        "id": "20130101-20140101-120",
        "label": "Pressure Washing",
        "value": 18
      },
      {
        "id": "20130101-20140101-122",
        "label": "Digging",
        "value": 434
      },
      {
        "id": "20130101-20140101-123",
        "label": "z(do not use)Weeding ",
        "value": 87
      },
      {
        "id": "20130101-20140101-128",
        "label": "Hauling",
        "value": 334
      },
      {
        "id": "20130101-20140101-131",
        "label": "Insulation",
        "value": 1
      },
      {
        "id": "20130101-20140101-132",
        "label": "Tile Installation",
        "value": 19
      },
      {
        "id": "20130101-20140101-133",
        "label": "Drywall - Taping and Sanding",
        "value": 45
      }

    ];
    return {reports};
  }
}
