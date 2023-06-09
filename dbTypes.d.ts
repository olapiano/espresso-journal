/* Database */

type Brand = {
    version: "0.1.0"
    _id: string
    name: string
}

type Grinder = {
    version: "0.1.0"
    _id: string
    brand: Brand
    model: string
    settings?: {
        min?: number
        max?: number
        steps?: number
    }
}

type EspressoMachine = {
    version: "0.1.0"
    _id: string
    brand: Brand
    model: string
    portafilterSize?: number
    temperature?: {
        max?: number
        min?: number
        steps?: number
    }
    preasureGaugeBuiltIn?: boolean
    builtInGrinder?: Grinder
    equipment: {
        filterBasketsIncluded: PortafilterBasket[]
    }
}

type PortafilterBasket = {
    version: "0.1.0"
    _id: string
    size: number
    minAmount?: number | null
    maxAmount?: number | null
    shot: "single" | "double"
    wall: "single"  | "dual"
}

type PuckScreen = {
    material: "metal" | "paper"
    type?: "mesh" | "sieve"
}

type Equipment = {
    version: "0.1.0"
    _id: string
    portafilterBaskets: PortafilterBasket[]
    wdt: boolean
    dosingCup: boolean
    levellingTool: boolean
    distributionTool: boolean
    puckScreen: PuckScreen[]
    presureGauge: boolean
}

type CoffeeRoaster = {
    version: "0.1.0"
    _id: string
    name: string
    location: string
}

type CoffeBeans = {
    version: "0.1.0"
    _id: string
    coffeeRoaster: CoffeeRoaster
    composition?: {
        arabica: number
        robusta: number
        other: number
    }
    roast: "light" | "medium" | "dark"
    origin?: string
    description?: string
}

type CoffeeBatch = {
    version: "0.1.0"
    beans: CoffeBeans,
    date: {
        roastDate?: Date
        bestBefore?: Date
        openedDate?: Date
        addedDate: Date
    }
    isActive: boolean
}

type JournalEntry = {
    version: "0.1.0"

    /* Espresso machine */
    espressoMachineId: EspressoMachine[_id]
    temperatureSetting?: number | null
    
    /* Grinder */
    grinder: Grinder['_id'] | null
    grinderSetting: number | null
    
    /* Coffee */
    coffee: CoffeeBatch['_id'] | null
    coffeeAmount: {
        amount: number | null
        measured: "g"
    }
    
    /* Preparation */
    nsew: boolean
    stockfletch: boolean
    sideTap: boolean
    settle: boolean
    wdt: boolean
    dosingCupShake: boolean
    levellingTool: boolean
    distributionTool: boolean
    puckScreen: PuckScreen
    tamperWeight: number | null

    /* Measurements */
    presure: number | null
    
    time: {
        totalTime: number | null
        brewingTime: number | null
        preInfusionTime: number | null
    }
    
    yield: {
        amount: number | null
        measured: "g" | "ml" | "oz"
    }
    
    yieldTemperature: number | null
    
    ratio: number | null

    postShotPuckWeight: {
        amount: number
        measured: "g"
    } | null

    /* Quality */
    tds: number | null
    extraction: number | null
    color: number | null
    aroma: number | null
    body: number | null
    aftertaste: number | null
    crema: number | null
}

type User = {
    version: "0.1.0"
    username: string
    email: string
    password: string
    birthday: Date
    espressoMachines: EspressoMachine[]
    grinders: Grinder[]
    coffee: CoffeeBatch[]
    equipment: {
        weissDistributionTool: boolean
        leveller: boolean
        distributionTool: boolean
        dosingCup: boolean
        portafilterBasket: PortafilterBasket[]
        presureGauge: boolean
        puckScreen: {
            metal: boolean
            cloth: boolean
            paper: boolean
        }
    }
    journalEntries: JournalEntry[]
}