import { Injectable } from '@angular/core';

Injectable()
export class Globals {

  BRAND_CATEGORIES = [
    {
      code: 'BAKERY',
      name: 'BAKERY'
    },
    {
      code: 'BEVERAGE',
      name: 'BEVERAGE'
    },
    {
      code: 'LAUNDRY',
      name: 'LAUNDRY'
    }
  ]

  SERVICES = [
    {
      code: '',
      name: ''
    }
  ]

  GENDERS = [
    {
      code: 0,
      name: "Nam"
    },
    {
      code: 1,
      name: "Nữ"
    }
  ]

  PROMOTION_TYPES = [
    {
      code: "PROMOTION_COST",
      name: "Khuyến mãi theo giá cố định"
    }, {
      code: "PROMOTION_PERCENT",
      name: "Khuyến mãi theo phần trăm"
    }
  ]

  DELIVERY_METHODS = [
    {
      code: "DELIVERY",
      name: "Giao hàng"
    },
    {
      code: "PICK_AT_STORE",
      name: "Nhận tại quán"
    }
  ]

  public detectPromotionTypeByCode(code: string): any {
    let result = null;
    this.PROMOTION_TYPES.forEach(type => {
      if (type.code == code) {
        result = type;
      }
    });
    return result;
  }

  ACTORS = [
    {
      code: 'anonymous',
      name: 'anonymous'
    },
    {
      code: 'customer',
      name: 'khách hàng'
    },
    {
      code: 'operator',
      name: 'quản trị viên'
    },
    {
      code: 'shipper',
      name: 'nhân viên giao hàng'
    },
    {
      code: 'checker',
      name: 'nhân viên kiểm đơn hàng'
    },
    {
      code: 'manager',
      name: 'quản lý'
    },
    {
      code: 'admin',
      name: 'admin'
    },
    {
      code: 'super_admin',
      name: 'super admin'
    }
  ];

  public detectActorByCode(code: string): any {
    let result = null;
    this.ACTORS.forEach(actor => {
      if (actor.code == code) {
        result = actor;
      }
    });
    return result;
  }

  public detectEmployeeByCode(code: string): string {
    let result = null;
    this.ACTORS.forEach(actor => {
      if (actor.code == code) {
        result = actor.name;
      }
    });
    return result;
  }

  //channel
  CHANNELS = [
    {
      code: 'at_store',
      name: 'tại cửa hàng'
    },
    {
      code: 'hotline',
      name: 'hotline'
    },
    {
      code: 'facebook',
      name: 'facebook'
    },
    {
      code: 'chatbot',
      name: 'chatbot'
    },
    {
      code: 'website',
      name: 'website'
    },
    {
      code: 'application',
      name: 'application'
    }
  ];

  public detectChannelByCode(code: string): any {
    let result = null;
    if (code != null) {
      this.CHANNELS.forEach(channel => {
        if (channel.code == code) {
          result = channel.name;
        }
      });
    }
    return result;
  }

  // let subRules = [
  //           CONST.AUTH_RULES.SHIPPER,
  //           CONST.AUTH_RULES.MANAGER
  //         ]
  //         R.when(subRules.indexOf(this.auth.userInfo.type) == -1)

  //bill status
  BILL_ACTIVITY_OPTIONS = [
    {
      'BILL_SENT_SUCCESSFULLY': 'gửi thành công'
    },

    {
      'BILL_DISTRIBUTED': 'đã điều phối'
    },

    {
      'BILL_WAITING_FOR_CONFIRMATION': 'chờ xác nhận'
    },
    {
      'BILL_CONFIRMED': 'đã xác nhận'
    },
    {
      'BILL_PICKING_UP': 'đang lấy hàng'
    },

    {
      'BILL_RECEIVED': 'đã nhận hàng'
    },

    {
      'BILL_PROCESSING': 'đang xử lý'
    },

    {
      'BILL_PREPARED': 'đã chuẩn bị'
    },

    {
      'BILL_SENT_SHIPPER': 'gửi giao hàng'
    },

    {
      'BILL_DELIVERING': 'đang giao hàng'
    },

    {
      'BILL_PAID': 'đã thanh toán'
    },

    {
      'BILL_COLLECTED_MONEY': 'đã thu tiền'
    },
  ];

  public avaibleBillActivityOption(code: string): any {
    let result = null;
    let subRules = [];
    if (code != null) {
      switch (code) {
        case 'BILL_SENT_SUCCESSFULLY': {
          subRules = [
            this.BILL_ACTIVITY_OPTIONS[1],
            this.BILL_ACTIVITY_OPTIONS[2],
            this.BILL_ACTIVITY_OPTIONS[3],
            // this.BILL_ACTIVITY_OPTIONS[4],
            // this.BILL_ACTIVITY_OPTIONS[5],
            this.BILL_ACTIVITY_OPTIONS[6],
            this.BILL_ACTIVITY_OPTIONS[7],
            this.BILL_ACTIVITY_OPTIONS[8],
            this.BILL_ACTIVITY_OPTIONS[9],
            this.BILL_ACTIVITY_OPTIONS[10],
            this.BILL_ACTIVITY_OPTIONS[11],
          ];
          break;
        }
        case 'BILL_DISTRIBUTED': {
          subRules = [
            this.BILL_ACTIVITY_OPTIONS[2],
            this.BILL_ACTIVITY_OPTIONS[3],
            // this.BILL_ACTIVITY_OPTIONS[4],
            // this.BILL_ACTIVITY_OPTIONS[5],
            this.BILL_ACTIVITY_OPTIONS[6],
            this.BILL_ACTIVITY_OPTIONS[7],
            this.BILL_ACTIVITY_OPTIONS[8],
            this.BILL_ACTIVITY_OPTIONS[9],
            this.BILL_ACTIVITY_OPTIONS[10],
            this.BILL_ACTIVITY_OPTIONS[11],
          ];
          break;
        }
        case 'BILL_WAITING_FOR_CONFIRMATION': {
          subRules = [
            this.BILL_ACTIVITY_OPTIONS[3],
            // this.BILL_ACTIVITY_OPTIONS[4],
            // this.BILL_ACTIVITY_OPTIONS[5],
            this.BILL_ACTIVITY_OPTIONS[6],
            this.BILL_ACTIVITY_OPTIONS[7],
            this.BILL_ACTIVITY_OPTIONS[8],
            this.BILL_ACTIVITY_OPTIONS[9],
            this.BILL_ACTIVITY_OPTIONS[10],
            this.BILL_ACTIVITY_OPTIONS[11],
          ];
          break;
        }
        case 'BILL_MODIFIED_AT_WAITING_FOR_CONFIRMATION': {
          subRules = [
            this.BILL_ACTIVITY_OPTIONS[3],
            // this.BILL_ACTIVITY_OPTIONS[4],
            // this.BILL_ACTIVITY_OPTIONS[5],
            this.BILL_ACTIVITY_OPTIONS[6],
            this.BILL_ACTIVITY_OPTIONS[7],
            this.BILL_ACTIVITY_OPTIONS[8],
            this.BILL_ACTIVITY_OPTIONS[9],
            this.BILL_ACTIVITY_OPTIONS[10],
            this.BILL_ACTIVITY_OPTIONS[11],
          ];
          break;
        }
        case 'BILL_CANCELLED_AT_WAITING_FOR_CONFIRMATION': {
          break;
        }
        case 'BILL_CONFIRMED': {
          subRules = [
            // this.BILL_ACTIVITY_OPTIONS[4],
            // this.BILL_ACTIVITY_OPTIONS[5],
            this.BILL_ACTIVITY_OPTIONS[6],
            this.BILL_ACTIVITY_OPTIONS[7],
            this.BILL_ACTIVITY_OPTIONS[8],
            this.BILL_ACTIVITY_OPTIONS[9],
            this.BILL_ACTIVITY_OPTIONS[10],
            this.BILL_ACTIVITY_OPTIONS[11],
          ];
          break;
        }
        case 'BILL_MODIFIED_AT_BILL_CONFIRMED': {
          subRules = [
            // this.BILL_ACTIVITY_OPTIONS[4],
            // this.BILL_ACTIVITY_OPTIONS[5],
            this.BILL_ACTIVITY_OPTIONS[6],
            this.BILL_ACTIVITY_OPTIONS[7],
            this.BILL_ACTIVITY_OPTIONS[8],
            this.BILL_ACTIVITY_OPTIONS[9],
            this.BILL_ACTIVITY_OPTIONS[10],
            this.BILL_ACTIVITY_OPTIONS[11],
          ];
          break;
        }
        case 'BILL_CANCELLED_AT_BILL_CONFIRMED': {
          break;
        }
        case 'BILL_PICKING_UP': {
          subRules = [
            // this.BILL_ACTIVITY_OPTIONS[5],
            this.BILL_ACTIVITY_OPTIONS[6],
            this.BILL_ACTIVITY_OPTIONS[7],
            this.BILL_ACTIVITY_OPTIONS[8],
            this.BILL_ACTIVITY_OPTIONS[9],
            this.BILL_ACTIVITY_OPTIONS[10],
            this.BILL_ACTIVITY_OPTIONS[11],
          ];
          break;
        }
        case 'BILL_MODIFIED_AT_PICKING_UP': {
          subRules = [
            // this.BILL_ACTIVITY_OPTIONS[5],
            this.BILL_ACTIVITY_OPTIONS[6],
            this.BILL_ACTIVITY_OPTIONS[7],
            this.BILL_ACTIVITY_OPTIONS[8],
            this.BILL_ACTIVITY_OPTIONS[9],
            this.BILL_ACTIVITY_OPTIONS[10],
            this.BILL_ACTIVITY_OPTIONS[11],
          ];
          break;
        }
        case 'BILL_CANCELLED_AT_PICKING_UP': {
          break;
        }
        case 'BILL_RECEIVED': {
          subRules = [
            this.BILL_ACTIVITY_OPTIONS[6],
            this.BILL_ACTIVITY_OPTIONS[7],
            this.BILL_ACTIVITY_OPTIONS[8],
            this.BILL_ACTIVITY_OPTIONS[9],
            this.BILL_ACTIVITY_OPTIONS[10],
            this.BILL_ACTIVITY_OPTIONS[11],
          ];
          break;
        }
        case 'BILL_MODIFIED_AT_RECEIVED': {
          subRules = [
            this.BILL_ACTIVITY_OPTIONS[6],
            this.BILL_ACTIVITY_OPTIONS[7],
            this.BILL_ACTIVITY_OPTIONS[8],
            this.BILL_ACTIVITY_OPTIONS[9],
            this.BILL_ACTIVITY_OPTIONS[10],
            this.BILL_ACTIVITY_OPTIONS[11],
          ];
          break;
        }
        case 'BILL_CANCELLED_AT_RECEIVED': {
          break;
        }
        case 'BILL_PROCESSING': {
          subRules = [
            this.BILL_ACTIVITY_OPTIONS[7],
            this.BILL_ACTIVITY_OPTIONS[8],
            this.BILL_ACTIVITY_OPTIONS[9],
            this.BILL_ACTIVITY_OPTIONS[10],
            this.BILL_ACTIVITY_OPTIONS[11],
          ];
          break;
        }
        case 'BILL_MODIFIED_AT_PROCESSING': {
          subRules = [
            this.BILL_ACTIVITY_OPTIONS[7],
            this.BILL_ACTIVITY_OPTIONS[8],
            this.BILL_ACTIVITY_OPTIONS[9],
            this.BILL_ACTIVITY_OPTIONS[10],
            this.BILL_ACTIVITY_OPTIONS[11],
          ];
          break;
        }
        case 'BILL_CANCELLED_AT_PROCESSING': {
          break;
        }
        case 'BILL_PREPARED': {
          subRules = [
            this.BILL_ACTIVITY_OPTIONS[8],
            this.BILL_ACTIVITY_OPTIONS[9],
            this.BILL_ACTIVITY_OPTIONS[10],
            this.BILL_ACTIVITY_OPTIONS[11],
          ];
          break;
        }
        case 'BILL_MODIFIED_AT_PREPARED': {
          subRules = [
            this.BILL_ACTIVITY_OPTIONS[8],
            this.BILL_ACTIVITY_OPTIONS[9],
            this.BILL_ACTIVITY_OPTIONS[10],
            this.BILL_ACTIVITY_OPTIONS[11],
          ];
          break;
        }
        case 'BILL_CANCELLED_AT_PREPARED': {
          break;
        }
        case 'BILL_SENT_SHIPPER': {
          subRules = [
            this.BILL_ACTIVITY_OPTIONS[9],
            this.BILL_ACTIVITY_OPTIONS[10],
            this.BILL_ACTIVITY_OPTIONS[11],
          ];
          break;
        }
        case 'BILL_MODIFIED_AT_SENT_SHIPPER': {
          subRules = [
            this.BILL_ACTIVITY_OPTIONS[9],
            this.BILL_ACTIVITY_OPTIONS[10],
            this.BILL_ACTIVITY_OPTIONS[11],
          ];
          break;
        }
        case 'BILL_CANCELLED_AT_SENT_SHIPPER': {
          break;
        }
        case 'BILL_DELIVERING': {
          subRules = [
            this.BILL_ACTIVITY_OPTIONS[10],
            this.BILL_ACTIVITY_OPTIONS[11],
          ];
          break;
        }
        case 'BILL_MODIFIED_AT_DELIVERING': {
          subRules = [
            this.BILL_ACTIVITY_OPTIONS[10],
            this.BILL_ACTIVITY_OPTIONS[11],
          ];
          break;
        }
        case 'BILL_CANCELLED_AT_DELIVERING': {
          break;
        }
        case 'c': {
          subRules = [
            this.BILL_ACTIVITY_OPTIONS[11],
          ];
          break;
        }
        case 'BILL_MODIFIED_AT_PAID': {
          subRules = [
            this.BILL_ACTIVITY_OPTIONS[11],
          ];
          break;
        }
        case 'BILL_COLLECTED_MONEY': {
          break;
        }
        case 'BILL_MODIFIED_AT_COLLECTED_MONEY': {
          break;
        }
      }
    }

    if (subRules.indexOf(code)) {
      result = subRules;
    }

    console.log(JSON.stringify(result));
    return result;
  }

  BILL_ACTIVITIES = [
    {
      code: 'BILL_SENT_SUCCESSFULLY',
      name: 'gửi thành công'
    },
    {
      code: 'BILL_DISTRIBUTED',
      name: 'đã điều phối'
    },

    {
      code: 'BILL_WAITING_FOR_CONFIRMATION',
      name: 'chờ xác nhận'
    },
    {
      code: 'BILL_MODIFIED_AT_WAITING_FOR_CONFIRMATION',
      name: 'chờ xác nhận'
    },
    {
      code: 'BILL_CANCELLED_AT_WAITING_FOR_CONFIRMATION',
      name: 'đã hủy'
    },

    {
      code: 'BILL_CONFIRMED',
      name: 'đã xác nhận'
    },
    {
      code: 'BILL_MODIFIED_AT_BILL_CONFIRMED',
      name: 'đã xác nhận'
    },
    {
      code: 'BILL_CANCELLED_AT_BILL_CONFIRMED',
      name: 'đã hủy'
    },

    {
      code: 'BILL_PICKING_UP',
      name: 'đang lấy hàng'
    },
    {
      code: 'BILL_MODIFIED_AT_PICKING_UP',
      name: 'đang lấy hàng'
    },
    {
      code: 'BILL_CANCELLED_AT_PICKING_UP',
      name: 'đã hủy'
    },

    {
      code: 'BILL_RECEIVED',
      name: 'đã nhận hàng'
    },
    {
      code: 'BILL_MODIFIED_AT_RECEIVED',
      name: 'đã nhận hàng'
    },
    {
      code: 'BILL_CANCELLED_AT_RECEIVED',
      name: 'đã hủy'
    },

    {
      code: 'BILL_PROCESSING',
      name: 'đang xử lý'
    },
    {
      code: 'BILL_MODIFIED_AT_PROCESSING',
      name: 'đang xử lý'
    },
    {
      code: 'BILL_CANCELLED_AT_PROCESSING',
      name: 'đã hủy'
    },

    {
      code: 'BILL_PREPARED',
      name: 'đã chuẩn bị'
    },
    {
      code: 'BILL_MODIFIED_AT_PREPARED',
      name: 'đã chuẩn bị'
    },
    {
      code: 'BILL_CANCELLED_AT_PREPARED',
      name: 'đã hủy'
    },

    {
      code: 'BILL_SENT_SHIPPER',
      name: 'gửi giao hàng'
    },
    {
      code: 'BILL_MODIFIED_AT_SENT_SHIPPER',
      name: 'gửi giao hàng'
    },
    {
      code: 'BILL_CANCELLED_AT_SENT_SHIPPER',
      name: 'đã hủy'
    },

    {
      code: 'BILL_DELIVERING',
      name: 'đang giao hàng'
    },
    {
      code: 'BILL_MODIFIED_AT_DELIVERING',
      name: 'đang giao hàng'
    },
    {
      code: 'BILL_CANCELLED_AT_DELIVERING',
      name: 'đã hủy'
    },

    {
      code: 'BILL_PAID',
      name: 'đã thanh toán'
    },
    {
      code: 'BILL_MODIFIED_AT_PAID',
      name: 'đã thanh toán'
    },

    {
      code: 'BILL_COLLECTED_MONEY',
      name: 'đã thu tiền'
    },
    {
      code: 'BILL_MODIFIED_AT_COLLECTED_MONEY',
      name: 'đã thu tiền'
    }
  ];

  public detectBillActivityByCode(code: string): any {
    let result = null;
    if (code == null || code == '') {
      result = null;
    }
    this.BILL_ACTIVITIES.forEach(activity => {
      if (activity.code == code) {
        result = activity.name;
      }
    });
    return result;
  }

  public getBillActivitiesOnDashboardLayout(): any {
    let activities: Array<any> = new Array<any>();
    activities.push(this.BILL_ACTIVITIES[0]);
    activities.push(this.BILL_ACTIVITIES[1]);
    activities.push(this.BILL_ACTIVITIES[2]);
    activities.push(this.BILL_ACTIVITIES[5]);
    // activities.push(this.BILL_ACTIVITIES[8]);
    // activities.push(this.BILL_ACTIVITIES[11]);
    activities.push(this.BILL_ACTIVITIES[14]);
    activities.push(this.BILL_ACTIVITIES[17]);
    activities.push(this.BILL_ACTIVITIES[20]);
    activities.push(this.BILL_ACTIVITIES[23]);
    activities.push(this.BILL_ACTIVITIES[27]);
    activities.push(this.BILL_ACTIVITIES[29]);
    return activities;
  }

  public detectNameCurrentActivityOnBill(code: string): string {
    let result;
    switch (code) {
      case
        this.BILL_ACTIVITIES[0].code: {
          result = this.BILL_ACTIVITIES[0].name;
          break;
        }
      case
        this.BILL_ACTIVITIES[1].code: {
          result = this.BILL_ACTIVITIES[1].name;
          break;
        }
      case
        this.BILL_ACTIVITIES[2].code,
        this.BILL_ACTIVITIES[3].code: {
          result = this.BILL_ACTIVITIES[2].name;
          break;
        }
      case
        this.BILL_ACTIVITIES[5].code,
        this.BILL_ACTIVITIES[6].code: {
          result = this.BILL_ACTIVITIES[5].name;
          break;
        }
      case
        this.BILL_ACTIVITIES[8].code,
        this.BILL_ACTIVITIES[9].code: {
          result = this.BILL_ACTIVITIES[8].name;
          break;
        }
      case
        this.BILL_ACTIVITIES[11].code,
        this.BILL_ACTIVITIES[12].code: {
          result = this.BILL_ACTIVITIES[11].name;
          break;
        }
      case
        this.BILL_ACTIVITIES[15].code,
        this.BILL_ACTIVITIES[16].code: {
          result = this.BILL_ACTIVITIES[15].name;
          break;
        }
      case
        this.BILL_ACTIVITIES[18].code,
        this.BILL_ACTIVITIES[19].code: {
          result = this.BILL_ACTIVITIES[18].name;
          break;
        }
      case
        this.BILL_ACTIVITIES[21].code,
        this.BILL_ACTIVITIES[22].code: {
          result = this.BILL_ACTIVITIES[21].name;
          break;
        }
      case
        this.BILL_ACTIVITIES[24].code,
        this.BILL_ACTIVITIES[25].code: {
          result = this.BILL_ACTIVITIES[24].name;
          break;
        }
      case
        this.BILL_ACTIVITIES[27].code,
        this.BILL_ACTIVITIES[28].code: {
          result = this.BILL_ACTIVITIES[27].name;
          break;
        }
      case
        this.BILL_ACTIVITIES[29].code,
        this.BILL_ACTIVITIES[30].code: {
          result = this.BILL_ACTIVITIES[29].name;
          break;
        }
      case
        this.BILL_ACTIVITIES[4].code,
        this.BILL_ACTIVITIES[7].code,
        this.BILL_ACTIVITIES[10].code,
        this.BILL_ACTIVITIES[13].code,
        this.BILL_ACTIVITIES[16].code,
        this.BILL_ACTIVITIES[19].code,
        this.BILL_ACTIVITIES[22].code,
        this.BILL_ACTIVITIES[25].code: {
          result = "đã hủy";
          break;
        }
    }
    return result;
  }

  PAID_HISTORY_TYPES = [
    {
      code: 'Partical',
      name: 'partical',
    },
    {
      code: 'Full',
      name: 'full'
    }
  ]

  public detectPaidHistoryTypeByCode(code: string): any {
    let result = null;
    if (code == null || code == '') {
      result = null;
    }
    this.PAID_HISTORY_TYPES.forEach(type => {
      if (type.code == code) {
        result = type.name;
      }
    });
    return result;
  }

  public convertStringToPrice(input: string): number {
    return Number.parseInt(input.toString().replace(/[^\d]/g, ''));
  }
}
