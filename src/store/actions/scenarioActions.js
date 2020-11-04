// Import Action Types
import {
    CREATE_SCENARIO,
    CURRENT_SCENARIO
  } from '../actions/types';

  /* 
  ,
    DUPLICATE_SCENARIO,
    DELETE_SCENARIO,
    SAVE_SCENARIO,
    RUN_MODEL,
    LOCK_SCENARIO,
    LOADING_SCENARIO
  **/

    //export functions and dispatchers (backend integration)
  export const createScenario = () => {
    return{
      type: CREATE_SCENARIO,
      payload: {
        1: {
          name: 'Nov/3/2020-v1',
          locked: false,
          loading: false,
          "hubs": {
          "ATLANTA": [
            {
              "HUB": "ATLANTA",
              "dt": "2020-10-15",
              "name": "hubCapacity",
              "value": 16.243496620879313
            },
            {
              "HUB": "ATLANTA",
              "dt": "2020-10-16",
              "name": "hubCapacity",
              "value": 10
            },
            {
              "HUB": "ATLANTA",
              "dt": "2020-10-17",
              "name": "hubCapacity",
              "value": 15.228508115461949
            },
            {
              "HUB": "ATLANTA",
              "dt": "2020-10-18",
              "name": "hubCapacity",
              "value": 14.558546621439916
            },
            {
              "HUB": "ATLANTA",
              "dt": "2020-10-19",
              "name": "hubCapacity",
              "value": 14.333480825381173
            },
            {
              "HUB": "ATLANTA",
              "dt": "2020-10-20",
              "name": "hubCapacity",
              "value": 35.33773530064198
            },
            {
              "HUB": "ATLANTA",
              "dt": "2020-10-21",
              "name": "hubCapacity",
              "value": 27.770152556440195
            },
            {
              "HUB": "ATLANTA",
              "dt": "2020-10-22",
              "name": "hubCapacity",
              "value": 45.24349662087931
            },
            {
              "HUB": "ATLANTA",
              "dt": "2020-10-23",
              "name": "hubCapacity",
              "value": 22.38135337457257
            },
            {
              "HUB": "ATLANTA",
              "dt": "2020-10-24",
              "name": "hubCapacity",
              "value": 17.22850811546195
            },
            {
              "HUB": "ATLANTA",
              "name": "hubIlodAvg",
              "value": 96.1952
            },
            {
              "HUB": "ATLANTA",
              "name": "hubBumpshift",
              "value": "Y"
            },
            {
              "HUB": "ATLANTA",
              "name": "hubStackingPenalty",
              "value": 1000
            },
            {
              "HUB": "ATLANTA",
              "name": "hubForecastBufferIB",
              "value": 0
            },
            {
              "HUB": "ATLANTA",
              "name": "hubForecastBufferOB",
              "value": 0
            },
            {
              "HUB": "ATLANTA",
              "name": "hubCapacityConstrained",
              "value": "N"
            },
            {
              "HUB": "ATLANTA",
              "name": "hubTierBonus",
              "value": 0
            }
          ],
          "BALTIMORE": [
            {
              "HUB": "BALTIMORE",
              "dt": "2020-10-15",
              "name": "hubCapacity",
              "value": 10.848691628463868
            },
            {
              "HUB": "BALTIMORE",
              "dt": "2020-10-16",
              "name": "hubCapacity",
              "value": 18.003332592921623
            },
            {
              "HUB": "BALTIMORE",
              "dt": "2020-10-17",
              "name": "hubCapacity",
              "value": 10.25959216804059
            },
            {
              "HUB": "BALTIMORE",
              "dt": "2020-10-18",
              "name": "hubCapacity",
              "value": 10
            },
            {
              "HUB": "BALTIMORE",
              "dt": "2020-10-19",
              "name": "hubCapacity",
              "value": 10
            },
            {
              "HUB": "BALTIMORE",
              "dt": "2020-10-20",
              "name": "hubCapacity",
              "value": 12.375768925200504
            },
            {
              "HUB": "BALTIMORE",
              "dt": "2020-10-21",
              "name": "hubCapacity",
              "value": 12.072741683799649
            },
            {
              "HUB": "BALTIMORE",
              "dt": "2020-10-22",
              "name": "hubCapacity",
              "value": 10
            },
            {
              "HUB": "BALTIMORE",
              "dt": "2020-10-23",
              "name": "hubCapacity",
              "value": 12.003332592921623
            },
            {
              "HUB": "BALTIMORE",
              "dt": "2020-10-24",
              "name": "hubCapacity",
              "value": 10.25959216804059
            },
            {
              "HUB": "BALTIMORE",
              "name": "hubIlodAvg",
              "value": 101.42937500000001
            },
            {
              "HUB": "BALTIMORE",
              "name": "hubBumpshift",
              "value": "Y"
            },
            {
              "HUB": "BALTIMORE",
              "name": "hubStackingPenalty",
              "value": 1000
            },
            {
              "HUB": "BALTIMORE",
              "name": "hubForecastBufferIB",
              "value": 0
            },
            {
              "HUB": "BALTIMORE",
              "name": "hubForecastBufferOB",
              "value": 0
            },
            {
              "HUB": "BALTIMORE",
              "name": "hubCapacityConstrained",
              "value": "N"
            },
            {
              "HUB": "BALTIMORE",
              "name": "hubTierBonus",
              "value": 0
            }
          ],
          "BARSTOW": [
            {
              "HUB": "BARSTOW",
              "dt": "2020-10-15",
              "name": "hubCapacity",
              "value": 10
            },
            {
              "HUB": "BARSTOW",
              "dt": "2020-10-16",
              "name": "hubCapacity",
              "value": 10
            },
            {
              "HUB": "BARSTOW",
              "dt": "2020-10-17",
              "name": "hubCapacity",
              "value": 10
            },
            {
              "HUB": "BARSTOW",
              "dt": "2020-10-18",
              "name": "hubCapacity",
              "value": 48
            },
            {
              "HUB": "BARSTOW",
              "dt": "2020-10-19",
              "name": "hubCapacity",
              "value": 10
            },
            {
              "HUB": "BARSTOW",
              "dt": "2020-10-20",
              "name": "hubCapacity",
              "value": 10
            },
            {
              "HUB": "BARSTOW",
              "dt": "2020-10-21",
              "name": "hubCapacity",
              "value": 10
            },
            {
              "HUB": "BARSTOW",
              "dt": "2020-10-22",
              "name": "hubCapacity",
              "value": 10
            },
            {
              "HUB": "BARSTOW",
              "dt": "2020-10-23",
              "name": "hubCapacity",
              "value": 10
            },
            {
              "HUB": "BARSTOW",
              "dt": "2020-10-24",
              "name": "hubCapacity",
              "value": 10
            },
            {
              "HUB": "BARSTOW",
              "name": "hubIlodAvg",
              "value": 90.76964444444444
            },
            {
              "HUB": "BARSTOW",
              "name": "hubBumpshift",
              "value": "Y"
            },
            {
              "HUB": "BARSTOW",
              "name": "hubStackingPenalty",
              "value": 1000
            },
            {
              "HUB": "BARSTOW",
              "name": "hubForecastBufferIB",
              "value": 0
            },
            {
              "HUB": "BARSTOW",
              "name": "hubForecastBufferOB",
              "value": 0
            },
            {
              "HUB": "BARSTOW",
              "name": "hubCapacityConstrained",
              "value": "N"
            },
            {
              "HUB": "BARSTOW",
              "name": "hubTierBonus",
              "value": 0
            }
          ],
          "CALGARY": [
            {
              "HUB": "CALGARY",
              "dt": "2020-10-15",
              "name": "hubCapacity",
              "value": 49
            },
            {
              "HUB": "CALGARY",
              "dt": "2020-10-16",
              "name": "hubCapacity",
              "value": 49
            },
            {
              "HUB": "CALGARY",
              "dt": "2020-10-17",
              "name": "hubCapacity",
              "value": 49
            },
            {
              "HUB": "CALGARY",
              "dt": "2020-10-18",
              "name": "hubCapacity",
              "value": 49
            },
            {
              "HUB": "CALGARY",
              "dt": "2020-10-19",
              "name": "hubCapacity",
              "value": 49
            },
            {
              "HUB": "CALGARY",
              "dt": "2020-10-20",
              "name": "hubCapacity",
              "value": 49
            },
            {
              "HUB": "CALGARY",
              "dt": "2020-10-21",
              "name": "hubCapacity",
              "value": 49
            },
            {
              "HUB": "CALGARY",
              "dt": "2020-10-22",
              "name": "hubCapacity",
              "value": 49
            },
            {
              "HUB": "CALGARY",
              "dt": "2020-10-23",
              "name": "hubCapacity",
              "value": 49
            },
            {
              "HUB": "CALGARY",
              "dt": "2020-10-24",
              "name": "hubCapacity",
              "value": 49
            },
            {
              "HUB": "CALGARY",
              "name": "hubIlodAvg",
              "value": 90.76964444444444
            },
            {
              "HUB": "CALGARY",
              "name": "hubBumpshift",
              "value": "Y"
            },
            {
              "HUB": "CALGARY",
              "name": "hubStackingPenalty",
              "value": 1000
            },
            {
              "HUB": "CALGARY",
              "name": "hubForecastBufferIB",
              "value": 0
            },
            {
              "HUB": "CALGARY",
              "name": "hubForecastBufferOB",
              "value": 0
            },
            {
              "HUB": "CALGARY",
              "name": "hubCapacityConstrained",
              "value": "N"
            },
            {
              "HUB": "CALGARY",
              "name": "hubTierBonus",
              "value": 0
            }
          ],
          "CHAMBRSBRG": [
            {
              "HUB": "CHAMBRSBRG",
              "dt": "2020-10-15",
              "name": "hubCapacity",
              "value": 10
            },
            {
              "HUB": "CHAMBRSBRG",
              "dt": "2020-10-16",
              "name": "hubCapacity",
              "value": 22.38901125765713
            },
            {
              "HUB": "CHAMBRSBRG",
              "dt": "2020-10-17",
              "name": "hubCapacity",
              "value": 47.73839928708165
            },
            {
              "HUB": "CHAMBRSBRG",
              "dt": "2020-10-18",
              "name": "hubCapacity",
              "value": 20.937132694069675
            },
            {
              "HUB": "CHAMBRSBRG",
              "dt": "2020-10-19",
              "name": "hubCapacity",
              "value": 69.61358872003353
            },
            {
              "HUB": "CHAMBRSBRG",
              "dt": "2020-10-20",
              "name": "hubCapacity",
              "value": 50.53305439208458
            },
            {
              "HUB": "CHAMBRSBRG",
              "dt": "2020-10-21",
              "name": "hubCapacity",
              "value": 45.0957780690178
            },
            {
              "HUB": "CHAMBRSBRG",
              "dt": "2020-10-22",
              "name": "hubCapacity",
              "value": 38.24582867768754
            },
            {
              "HUB": "CHAMBRSBRG",
              "dt": "2020-10-23",
              "name": "hubCapacity",
              "value": 29.38901125765713
            },
            {
              "HUB": "CHAMBRSBRG",
              "dt": "2020-10-24",
              "name": "hubCapacity",
              "value": 52.73839928708165
            },
            {
              "HUB": "CHAMBRSBRG",
              "name": "hubIlodAvg",
              "value": 79.1759219088937
            },
            {
              "HUB": "CHAMBRSBRG",
              "name": "hubBumpshift",
              "value": "Y"
            },
            {
              "HUB": "CHAMBRSBRG",
              "name": "hubStackingPenalty",
              "value": 1000
            },
            {
              "HUB": "CHAMBRSBRG",
              "name": "hubForecastBufferIB",
              "value": 0
            },
            {
              "HUB": "CHAMBRSBRG",
              "name": "hubForecastBufferOB",
              "value": 0
            },
            {
              "HUB": "CHAMBRSBRG",
              "name": "hubCapacityConstrained",
              "value": "N"
            },
            {
              "HUB": "CHAMBRSBRG",
              "name": "hubTierBonus",
              "value": 0
            }
          ],
          "CHARLOTTE": [
            {
              "HUB": "CHARLOTTE",
              "dt": "2020-10-15",
              "name": "hubCapacity",
              "value": 10
            },
            {
              "HUB": "CHARLOTTE",
              "dt": "2020-10-16",
              "name": "hubCapacity",
              "value": 11.577653154100737
            },
            {
              "HUB": "CHARLOTTE",
              "dt": "2020-10-17",
              "name": "hubCapacity",
              "value": 20.33440854621105
            },
            {
              "HUB": "CHARLOTTE",
              "dt": "2020-10-18",
              "name": "hubCapacity",
              "value": 12.786974680894673
            },
            {
              "HUB": "CHARLOTTE",
              "dt": "2020-10-19",
              "name": "hubCapacity",
              "value": 10.164633843973064
            },
            {
              "HUB": "CHARLOTTE",
              "dt": "2020-10-20",
              "name": "hubCapacity",
              "value": 10
            },
            {
              "HUB": "CHARLOTTE",
              "dt": "2020-10-21",
              "name": "hubCapacity",
              "value": 17.127411872482185
            },
            {
              "HUB": "CHARLOTTE",
              "dt": "2020-10-22",
              "name": "hubCapacity",
              "value": 11.687678830242824
            },
            {
              "HUB": "CHARLOTTE",
              "dt": "2020-10-23",
              "name": "hubCapacity",
              "value": 11.577653154100737
            },
            {
              "HUB": "CHARLOTTE",
              "dt": "2020-10-24",
              "name": "hubCapacity",
              "value": 18.33440854621105
            },
            {
              "HUB": "CHARLOTTE",
              "name": "hubIlodAvg",
              "value": 149.66680555555556
            },
            {
              "HUB": "CHARLOTTE",
              "name": "hubBumpshift",
              "value": "Y"
            },
            {
              "HUB": "CHARLOTTE",
              "name": "hubStackingPenalty",
              "value": 1000
            },
            {
              "HUB": "CHARLOTTE",
              "name": "hubForecastBufferIB",
              "value": 0
            },
            {
              "HUB": "CHARLOTTE",
              "name": "hubForecastBufferOB",
              "value": 0
            },
            {
              "HUB": "CHARLOTTE",
              "name": "hubCapacityConstrained",
              "value": "N"
            },
            {
              "HUB": "CHARLOTTE",
              "name": "hubTierBonus",
              "value": 0
            }
          ],
          "CHICAGO": [
            {
              "HUB": "CHICAGO",
              "dt": "2020-10-15",
              "name": "hubCapacity",
              "value": 100
            },
            {
              "HUB": "CHICAGO",
              "dt": "2020-10-16",
              "name": "hubCapacity",
              "value": 100
            },
            {
              "HUB": "CHICAGO",
              "dt": "2020-10-17",
              "name": "hubCapacity",
              "value": 100
            },
            {
              "HUB": "CHICAGO",
              "dt": "2020-10-18",
              "name": "hubCapacity",
              "value": 100
            },
            {
              "HUB": "CHICAGO",
              "dt": "2020-10-19",
              "name": "hubCapacity",
              "value": 100
            },
            {
              "HUB": "CHICAGO",
              "dt": "2020-10-20",
              "name": "hubCapacity",
              "value": 100
            },
            {
              "HUB": "CHICAGO",
              "dt": "2020-10-21",
              "name": "hubCapacity",
              "value": 100
            },
            {
              "HUB": "CHICAGO",
              "dt": "2020-10-22",
              "name": "hubCapacity",
              "value": 100
            },
            {
              "HUB": "CHICAGO",
              "dt": "2020-10-23",
              "name": "hubCapacity",
              "value": 100
            },
            {
              "HUB": "CHICAGO",
              "dt": "2020-10-24",
              "name": "hubCapacity",
              "value": 100
            },
            {
              "HUB": "CHICAGO",
              "name": "hubIlodAvg",
              "value": 92.20330000000001
            },
            {
              "HUB": "CHICAGO",
              "name": "hubBumpshift",
              "value": "Y"
            },
            {
              "HUB": "CHICAGO",
              "name": "hubStackingPenalty",
              "value": 1000
            },
            {
              "HUB": "CHICAGO",
              "name": "hubForecastBufferIB",
              "value": 0
            },
            {
              "HUB": "CHICAGO",
              "name": "hubForecastBufferOB",
              "value": 0
            },
            {
              "HUB": "CHICAGO",
              "name": "hubCapacityConstrained",
              "value": "N"
            },
            {
              "HUB": "CHICAGO",
              "name": "hubTierBonus",
              "value": 0
            }
          ]
          },
          "lanes": {
          "ATLANTA-CHICAGO": [
            {
              "DHUB": "CHICAGO",
              "LANE": "ATLANTA-CHICAGO",
              "OHUB": "ATLANTA",
              "name": "AVG_TRANSIT",
              "value": 47.27418657331141
            },
            {
              "DHUB": "CHICAGO",
              "LANE": "ATLANTA-CHICAGO",
              "OHUB": "ATLANTA",
              "name": "PRICE",
              "value": 450
            },
            {
              "DHUB": "CHICAGO",
              "LANE": "ATLANTA-CHICAGO",
              "OHUB": "ATLANTA",
              "name": "ACTIVE",
              "value": "Y"
            },
            {
              "DHUB": "CHICAGO",
              "LANE": "ATLANTA-CHICAGO",
              "OHUB": "ATLANTA",
              "name": "laneTransitOverride",
              "value": "N"
            },
            {
              "DHUB": "CHICAGO",
              "LANE": "ATLANTA-CHICAGO",
              "OHUB": "ATLANTA",
              "name": "WEEKLY_CAP",
              "value": 560
            }
          ],
          "ATLANTA-LA": [
            {
              "DHUB": "LA",
              "LANE": "ATLANTA-LA",
              "OHUB": "ATLANTA",
              "name": "AVG_TRANSIT",
              "value": 183.99453094990733
            },
            {
              "DHUB": "LA",
              "LANE": "ATLANTA-LA",
              "OHUB": "ATLANTA",
              "name": "PRICE",
              "value": 450
            },
            {
              "DHUB": "LA",
              "LANE": "ATLANTA-LA",
              "OHUB": "ATLANTA",
              "name": "ACTIVE",
              "value": "Y"
            },
            {
              "DHUB": "LA",
              "LANE": "ATLANTA-LA",
              "OHUB": "ATLANTA",
              "name": "laneTransitOverride",
              "value": "N"
            },
            {
              "DHUB": "LA",
              "LANE": "ATLANTA-LA",
              "OHUB": "ATLANTA",
              "name": "WEEKLY_CAP",
              "value": 560
            }
          ],
          "ATLANTA-MEMPHIS": [
            {
              "DHUB": "MEMPHIS",
              "LANE": "ATLANTA-MEMPHIS",
              "OHUB": "ATLANTA",
              "name": "AVG_TRANSIT",
              "value": null
            },
            {
              "DHUB": "MEMPHIS",
              "LANE": "ATLANTA-MEMPHIS",
              "OHUB": "ATLANTA",
              "name": "PRICE",
              "value": 450
            },
            {
              "DHUB": "MEMPHIS",
              "LANE": "ATLANTA-MEMPHIS",
              "OHUB": "ATLANTA",
              "name": "ACTIVE",
              "value": "Y"
            },
            {
              "DHUB": "MEMPHIS",
              "LANE": "ATLANTA-MEMPHIS",
              "OHUB": "ATLANTA",
              "name": "laneTransitOverride",
              "value": "N"
            },
            {
              "DHUB": "MEMPHIS",
              "LANE": "ATLANTA-MEMPHIS",
              "OHUB": "ATLANTA",
              "name": "WEEKLY_CAP",
              "value": 560
            }
          ],
          "ATLANTA-SAN BERN": [
            {
              "DHUB": "SAN BERN",
              "LANE": "ATLANTA-SAN BERN",
              "OHUB": "ATLANTA",
              "name": "AVG_TRANSIT",
              "value": null
            },
            {
              "DHUB": "SAN BERN",
              "LANE": "ATLANTA-SAN BERN",
              "OHUB": "ATLANTA",
              "name": "PRICE",
              "value": 450
            },
            {
              "DHUB": "SAN BERN",
              "LANE": "ATLANTA-SAN BERN",
              "OHUB": "ATLANTA",
              "name": "ACTIVE",
              "value": "Y"
            },
            {
              "DHUB": "SAN BERN",
              "LANE": "ATLANTA-SAN BERN",
              "OHUB": "ATLANTA",
              "name": "laneTransitOverride",
              "value": "N"
            },
            {
              "DHUB": "SAN BERN",
              "LANE": "ATLANTA-SAN BERN",
              "OHUB": "ATLANTA",
              "name": "WEEKLY_CAP",
              "value": 560
            }
          ],
          "ATLANTA-STOCKTON": [
            {
              "DHUB": "STOCKTON",
              "LANE": "ATLANTA-STOCKTON",
              "OHUB": "ATLANTA",
              "name": "AVG_TRANSIT",
              "value": null
            },
            {
              "DHUB": "STOCKTON",
              "LANE": "ATLANTA-STOCKTON",
              "OHUB": "ATLANTA",
              "name": "PRICE",
              "value": 450
            },
            {
              "DHUB": "STOCKTON",
              "LANE": "ATLANTA-STOCKTON",
              "OHUB": "ATLANTA",
              "name": "ACTIVE",
              "value": "Y"
            },
            {
              "DHUB": "STOCKTON",
              "LANE": "ATLANTA-STOCKTON",
              "OHUB": "ATLANTA",
              "name": "laneTransitOverride",
              "value": "N"
            },
            {
              "DHUB": "STOCKTON",
              "LANE": "ATLANTA-STOCKTON",
              "OHUB": "ATLANTA",
              "name": "WEEKLY_CAP",
              "value": 560
            }
          ],
          "BALTIMORE-CHAMBRSBRG": [
            {
              "DHUB": "CHAMBRSBRG",
              "LANE": "BALTIMORE-CHAMBRSBRG",
              "OHUB": "BALTIMORE",
              "name": "AVG_TRANSIT",
              "value": null
            },
            {
              "DHUB": "CHAMBRSBRG",
              "LANE": "BALTIMORE-CHAMBRSBRG",
              "OHUB": "BALTIMORE",
              "name": "PRICE",
              "value": 450
            },
            {
              "DHUB": "CHAMBRSBRG",
              "LANE": "BALTIMORE-CHAMBRSBRG",
              "OHUB": "BALTIMORE",
              "name": "ACTIVE",
              "value": "Y"
            },
            {
              "DHUB": "CHAMBRSBRG",
              "LANE": "BALTIMORE-CHAMBRSBRG",
              "OHUB": "BALTIMORE",
              "name": "laneTransitOverride",
              "value": "N"
            },
            {
              "DHUB": "CHAMBRSBRG",
              "LANE": "BALTIMORE-CHAMBRSBRG",
              "OHUB": "BALTIMORE",
              "name": "WEEKLY_CAP",
              "value": 560
            }
          ],
          "BALTIMORE-CHICAGO": [
            {
              "DHUB": "CHICAGO",
              "LANE": "BALTIMORE-CHICAGO",
              "OHUB": "BALTIMORE",
              "name": "AVG_TRANSIT",
              "value": 45.36952228449426
            },
            {
              "DHUB": "CHICAGO",
              "LANE": "BALTIMORE-CHICAGO",
              "OHUB": "BALTIMORE",
              "name": "PRICE",
              "value": 450
            },
            {
              "DHUB": "CHICAGO",
              "LANE": "BALTIMORE-CHICAGO",
              "OHUB": "BALTIMORE",
              "name": "ACTIVE",
              "value": "Y"
            },
            {
              "DHUB": "CHICAGO",
              "LANE": "BALTIMORE-CHICAGO",
              "OHUB": "BALTIMORE",
              "name": "laneTransitOverride",
              "value": "N"
            },
            {
              "DHUB": "CHICAGO",
              "LANE": "BALTIMORE-CHICAGO",
              "OHUB": "BALTIMORE",
              "name": "WEEKLY_CAP",
              "value": 560
            }
          ],
          "CALGARY-CHICAGO": [
            {
              "DHUB": "CHICAGO",
              "LANE": "CALGARY-CHICAGO",
              "OHUB": "CALGARY",
              "name": "AVG_TRANSIT",
              "value": null
            },
            {
              "DHUB": "CHICAGO",
              "LANE": "CALGARY-CHICAGO",
              "OHUB": "CALGARY",
              "name": "PRICE",
              "value": 450
            },
            {
              "DHUB": "CHICAGO",
              "LANE": "CALGARY-CHICAGO",
              "OHUB": "CALGARY",
              "name": "ACTIVE",
              "value": "Y"
            },
            {
              "DHUB": "CHICAGO",
              "LANE": "CALGARY-CHICAGO",
              "OHUB": "CALGARY",
              "name": "laneTransitOverride",
              "value": "N"
            },
            {
              "DHUB": "CHICAGO",
              "LANE": "CALGARY-CHICAGO",
              "OHUB": "CALGARY",
              "name": "WEEKLY_CAP",
              "value": 560
            }
          ],
          "CHAMBRSBRG-BALTIMORE": [
            {
              "DHUB": "BALTIMORE",
              "LANE": "CHAMBRSBRG-BALTIMORE",
              "OHUB": "CHAMBRSBRG",
              "name": "AVG_TRANSIT",
              "value": null
            },
            {
              "DHUB": "BALTIMORE",
              "LANE": "CHAMBRSBRG-BALTIMORE",
              "OHUB": "CHAMBRSBRG",
              "name": "PRICE",
              "value": 450
            },
            {
              "DHUB": "BALTIMORE",
              "LANE": "CHAMBRSBRG-BALTIMORE",
              "OHUB": "CHAMBRSBRG",
              "name": "ACTIVE",
              "value": "Y"
            },
            {
              "DHUB": "BALTIMORE",
              "LANE": "CHAMBRSBRG-BALTIMORE",
              "OHUB": "CHAMBRSBRG",
              "name": "laneTransitOverride",
              "value": "N"
            },
            {
              "DHUB": "BALTIMORE",
              "LANE": "CHAMBRSBRG-BALTIMORE",
              "OHUB": "CHAMBRSBRG",
              "name": "WEEKLY_CAP",
              "value": 560
            }
          ],
          "CHAMBRSBRG-CHICAGO": [
            {
              "DHUB": "CHICAGO",
              "LANE": "CHAMBRSBRG-CHICAGO",
              "OHUB": "CHAMBRSBRG",
              "name": "AVG_TRANSIT",
              "value": 44.560098316677056
            },
            {
              "DHUB": "CHICAGO",
              "LANE": "CHAMBRSBRG-CHICAGO",
              "OHUB": "CHAMBRSBRG",
              "name": "PRICE",
              "value": 450
            },
            {
              "DHUB": "CHICAGO",
              "LANE": "CHAMBRSBRG-CHICAGO",
              "OHUB": "CHAMBRSBRG",
              "name": "ACTIVE",
              "value": "Y"
            },
            {
              "DHUB": "CHICAGO",
              "LANE": "CHAMBRSBRG-CHICAGO",
              "OHUB": "CHAMBRSBRG",
              "name": "laneTransitOverride",
              "value": "N"
            },
            {
              "DHUB": "CHICAGO",
              "LANE": "CHAMBRSBRG-CHICAGO",
              "OHUB": "CHAMBRSBRG",
              "name": "WEEKLY_CAP",
              "value": 560
            }
          ],
          "CHAMBRSBRG-LA": [
            {
              "DHUB": "LA",
              "LANE": "CHAMBRSBRG-LA",
              "OHUB": "CHAMBRSBRG",
              "name": "AVG_TRANSIT",
              "value": null
            },
            {
              "DHUB": "LA",
              "LANE": "CHAMBRSBRG-LA",
              "OHUB": "CHAMBRSBRG",
              "name": "PRICE",
              "value": 450
            },
            {
              "DHUB": "LA",
              "LANE": "CHAMBRSBRG-LA",
              "OHUB": "CHAMBRSBRG",
              "name": "ACTIVE",
              "value": "Y"
            },
            {
              "DHUB": "LA",
              "LANE": "CHAMBRSBRG-LA",
              "OHUB": "CHAMBRSBRG",
              "name": "laneTransitOverride",
              "value": "N"
            },
            {
              "DHUB": "LA",
              "LANE": "CHAMBRSBRG-LA",
              "OHUB": "CHAMBRSBRG",
              "name": "WEEKLY_CAP",
              "value": 560
            }
          ],
          "CHAMBRSBRG-ST LOUIS": [
            {
              "DHUB": "ST LOUIS",
              "LANE": "CHAMBRSBRG-ST LOUIS",
              "OHUB": "CHAMBRSBRG",
              "name": "AVG_TRANSIT",
              "value": null
            },
            {
              "DHUB": "ST LOUIS",
              "LANE": "CHAMBRSBRG-ST LOUIS",
              "OHUB": "CHAMBRSBRG",
              "name": "PRICE",
              "value": 450
            },
            {
              "DHUB": "ST LOUIS",
              "LANE": "CHAMBRSBRG-ST LOUIS",
              "OHUB": "CHAMBRSBRG",
              "name": "ACTIVE",
              "value": "Y"
            },
            {
              "DHUB": "ST LOUIS",
              "LANE": "CHAMBRSBRG-ST LOUIS",
              "OHUB": "CHAMBRSBRG",
              "name": "laneTransitOverride",
              "value": "N"
            },
            {
              "DHUB": "ST LOUIS",
              "LANE": "CHAMBRSBRG-ST LOUIS",
              "OHUB": "CHAMBRSBRG",
              "name": "WEEKLY_CAP",
              "value": 560
            }
          ],
          "CHARLOTTE-CHICAGO": [
            {
              "DHUB": "CHICAGO",
              "LANE": "CHARLOTTE-CHICAGO",
              "OHUB": "CHARLOTTE",
              "name": "AVG_TRANSIT",
              "value": 94.69902849740943
            },
            {
              "DHUB": "CHICAGO",
              "LANE": "CHARLOTTE-CHICAGO",
              "OHUB": "CHARLOTTE",
              "name": "PRICE",
              "value": 450
            },
            {
              "DHUB": "CHICAGO",
              "LANE": "CHARLOTTE-CHICAGO",
              "OHUB": "CHARLOTTE",
              "name": "ACTIVE",
              "value": "Y"
            },
            {
              "DHUB": "CHICAGO",
              "LANE": "CHARLOTTE-CHICAGO",
              "OHUB": "CHARLOTTE",
              "name": "laneTransitOverride",
              "value": "N"
            },
            {
              "DHUB": "CHICAGO",
              "LANE": "CHARLOTTE-CHICAGO",
              "OHUB": "CHARLOTTE",
              "name": "WEEKLY_CAP",
              "value": 560
            }
          ],
          "CHARLOTTE-SAN BERN": [
            {
              "DHUB": "SAN BERN",
              "LANE": "CHARLOTTE-SAN BERN",
              "OHUB": "CHARLOTTE",
              "name": "AVG_TRANSIT",
              "value": null
            },
            {
              "DHUB": "SAN BERN",
              "LANE": "CHARLOTTE-SAN BERN",
              "OHUB": "CHARLOTTE",
              "name": "PRICE",
              "value": 450
            },
            {
              "DHUB": "SAN BERN",
              "LANE": "CHARLOTTE-SAN BERN",
              "OHUB": "CHARLOTTE",
              "name": "ACTIVE",
              "value": "Y"
            },
            {
              "DHUB": "SAN BERN",
              "LANE": "CHARLOTTE-SAN BERN",
              "OHUB": "CHARLOTTE",
              "name": "laneTransitOverride",
              "value": "N"
            },
            {
              "DHUB": "SAN BERN",
              "LANE": "CHARLOTTE-SAN BERN",
              "OHUB": "CHARLOTTE",
              "name": "WEEKLY_CAP",
              "value": 560
            }
          ],
          "CHICAGO-CHICAGO": [
            {
              "DHUB": "CHICAGO",
              "LANE": "CHICAGO-CHICAGO",
              "OHUB": "CHICAGO",
              "name": "AVG_TRANSIT",
              "value": null
            },
            {
              "DHUB": "CHICAGO",
              "LANE": "CHICAGO-CHICAGO",
              "OHUB": "CHICAGO",
              "name": "PRICE",
              "value": 450
            },
            {
              "DHUB": "CHICAGO",
              "LANE": "CHICAGO-CHICAGO",
              "OHUB": "CHICAGO",
              "name": "ACTIVE",
              "value": "Y"
            },
            {
              "DHUB": "CHICAGO",
              "LANE": "CHICAGO-CHICAGO",
              "OHUB": "CHICAGO",
              "name": "laneTransitOverride",
              "value": "N"
            },
            {
              "DHUB": "CHICAGO",
              "LANE": "CHICAGO-CHICAGO",
              "OHUB": "CHICAGO",
              "name": "WEEKLY_CAP",
              "value": 560
            }
          ],
          "CHICAGO-DALLAS": [
            {
              "DHUB": "DALLAS",
              "LANE": "CHICAGO-DALLAS",
              "OHUB": "CHICAGO",
              "name": "AVG_TRANSIT",
              "value": null
            },
            {
              "DHUB": "DALLAS",
              "LANE": "CHICAGO-DALLAS",
              "OHUB": "CHICAGO",
              "name": "PRICE",
              "value": 450
            },
            {
              "DHUB": "DALLAS",
              "LANE": "CHICAGO-DALLAS",
              "OHUB": "CHICAGO",
              "name": "ACTIVE",
              "value": "Y"
            },
            {
              "DHUB": "DALLAS",
              "LANE": "CHICAGO-DALLAS",
              "OHUB": "CHICAGO",
              "name": "laneTransitOverride",
              "value": "N"
            },
            {
              "DHUB": "DALLAS",
              "LANE": "CHICAGO-DALLAS",
              "OHUB": "CHICAGO",
              "name": "WEEKLY_CAP",
              "value": 560
            }
          ],
          "CHICAGO-LA": [
            {
              "DHUB": "LA",
              "LANE": "CHICAGO-LA",
              "OHUB": "CHICAGO",
              "name": "AVG_TRANSIT",
              "value": null
            },
            {
              "DHUB": "LA",
              "LANE": "CHICAGO-LA",
              "OHUB": "CHICAGO",
              "name": "PRICE",
              "value": 450
            },
            {
              "DHUB": "LA",
              "LANE": "CHICAGO-LA",
              "OHUB": "CHICAGO",
              "name": "ACTIVE",
              "value": "Y"
            },
            {
              "DHUB": "LA",
              "LANE": "CHICAGO-LA",
              "OHUB": "CHICAGO",
              "name": "laneTransitOverride",
              "value": "N"
            },
            {
              "DHUB": "LA",
              "LANE": "CHICAGO-LA",
              "OHUB": "CHICAGO",
              "name": "WEEKLY_CAP",
              "value": 560
            }
          ],
          "CHICAGO-MONTERREY": [
            {
              "DHUB": "MONTERREY",
              "LANE": "CHICAGO-MONTERREY",
              "OHUB": "CHICAGO",
              "name": "AVG_TRANSIT",
              "value": null
            },
            {
              "DHUB": "MONTERREY",
              "LANE": "CHICAGO-MONTERREY",
              "OHUB": "CHICAGO",
              "name": "PRICE",
              "value": 450
            },
            {
              "DHUB": "MONTERREY",
              "LANE": "CHICAGO-MONTERREY",
              "OHUB": "CHICAGO",
              "name": "ACTIVE",
              "value": "Y"
            },
            {
              "DHUB": "MONTERREY",
              "LANE": "CHICAGO-MONTERREY",
              "OHUB": "CHICAGO",
              "name": "laneTransitOverride",
              "value": "N"
            },
            {
              "DHUB": "MONTERREY",
              "LANE": "CHICAGO-MONTERREY",
              "OHUB": "CHICAGO",
              "name": "WEEKLY_CAP",
              "value": 560
            }
          ],
          "CHICAGO-MONTREAL": [
            {
              "DHUB": "MONTREAL",
              "LANE": "CHICAGO-MONTREAL",
              "OHUB": "CHICAGO",
              "name": "AVG_TRANSIT",
              "value": null
            },
            {
              "DHUB": "MONTREAL",
              "LANE": "CHICAGO-MONTREAL",
              "OHUB": "CHICAGO",
              "name": "PRICE",
              "value": 450
            },
            {
              "DHUB": "MONTREAL",
              "LANE": "CHICAGO-MONTREAL",
              "OHUB": "CHICAGO",
              "name": "ACTIVE",
              "value": "Y"
            },
            {
              "DHUB": "MONTREAL",
              "LANE": "CHICAGO-MONTREAL",
              "OHUB": "CHICAGO",
              "name": "laneTransitOverride",
              "value": "N"
            },
            {
              "DHUB": "MONTREAL",
              "LANE": "CHICAGO-MONTREAL",
              "OHUB": "CHICAGO",
              "name": "WEEKLY_CAP",
              "value": 560
            }
          ],
          "CHICAGO-SEATTLE": [
            {
              "DHUB": "SEATTLE",
              "LANE": "CHICAGO-SEATTLE",
              "OHUB": "CHICAGO",
              "name": "AVG_TRANSIT",
              "value": null
            },
            {
              "DHUB": "SEATTLE",
              "LANE": "CHICAGO-SEATTLE",
              "OHUB": "CHICAGO",
              "name": "PRICE",
              "value": 450
            },
            {
              "DHUB": "SEATTLE",
              "LANE": "CHICAGO-SEATTLE",
              "OHUB": "CHICAGO",
              "name": "ACTIVE",
              "value": "Y"
            },
            {
              "DHUB": "SEATTLE",
              "LANE": "CHICAGO-SEATTLE",
              "OHUB": "CHICAGO",
              "name": "laneTransitOverride",
              "value": "N"
            },
            {
              "DHUB": "SEATTLE",
              "LANE": "CHICAGO-SEATTLE",
              "OHUB": "CHICAGO",
              "name": "WEEKLY_CAP",
              "value": 560
            }
          ],
          "CHICAGO-ST PAUL": [
            {
              "DHUB": "ST PAUL",
              "LANE": "CHICAGO-ST PAUL",
              "OHUB": "CHICAGO",
              "name": "AVG_TRANSIT",
              "value": null
            },
            {
              "DHUB": "ST PAUL",
              "LANE": "CHICAGO-ST PAUL",
              "OHUB": "CHICAGO",
              "name": "PRICE",
              "value": 450
            },
            {
              "DHUB": "ST PAUL",
              "LANE": "CHICAGO-ST PAUL",
              "OHUB": "CHICAGO",
              "name": "ACTIVE",
              "value": "Y"
            },
            {
              "DHUB": "ST PAUL",
              "LANE": "CHICAGO-ST PAUL",
              "OHUB": "CHICAGO",
              "name": "laneTransitOverride",
              "value": "N"
            },
            {
              "DHUB": "ST PAUL",
              "LANE": "CHICAGO-ST PAUL",
              "OHUB": "CHICAGO",
              "name": "WEEKLY_CAP",
              "value": 560
            }
          ],
          "CHICAGO-STOCKTON": [
            {
              "DHUB": "STOCKTON",
              "LANE": "CHICAGO-STOCKTON",
              "OHUB": "CHICAGO",
              "name": "AVG_TRANSIT",
              "value": null
            },
            {
              "DHUB": "STOCKTON",
              "LANE": "CHICAGO-STOCKTON",
              "OHUB": "CHICAGO",
              "name": "PRICE",
              "value": 450
            },
            {
              "DHUB": "STOCKTON",
              "LANE": "CHICAGO-STOCKTON",
              "OHUB": "CHICAGO",
              "name": "ACTIVE",
              "value": "Y"
            },
            {
              "DHUB": "STOCKTON",
              "LANE": "CHICAGO-STOCKTON",
              "OHUB": "CHICAGO",
              "name": "laneTransitOverride",
              "value": "N"
            },
            {
              "DHUB": "STOCKTON",
              "LANE": "CHICAGO-STOCKTON",
              "OHUB": "CHICAGO",
              "name": "WEEKLY_CAP",
              "value": 560
            }
          ],
          "CHICAGO-TORONTO": [
            {
              "DHUB": "TORONTO",
              "LANE": "CHICAGO-TORONTO",
              "OHUB": "CHICAGO",
              "name": "AVG_TRANSIT",
              "value": null
            },
            {
              "DHUB": "TORONTO",
              "LANE": "CHICAGO-TORONTO",
              "OHUB": "CHICAGO",
              "name": "PRICE",
              "value": 450
            },
            {
              "DHUB": "TORONTO",
              "LANE": "CHICAGO-TORONTO",
              "OHUB": "CHICAGO",
              "name": "ACTIVE",
              "value": "Y"
            },
            {
              "DHUB": "TORONTO",
              "LANE": "CHICAGO-TORONTO",
              "OHUB": "CHICAGO",
              "name": "laneTransitOverride",
              "value": "N"
            },
            {
              "DHUB": "TORONTO",
              "LANE": "CHICAGO-TORONTO",
              "OHUB": "CHICAGO",
              "name": "WEEKLY_CAP",
              "value": 560
            }
          ]
          }
        }
      }
    };
  };

  export const setCurrentScenario = (card) => {
    return {
      type: CURRENT_SCENARIO,
      payload: card
    };
  };