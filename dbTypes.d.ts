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

type CoffeeBlend = {
    version: "0.1.0"
    _id: string
    name: string
    coffeeRoaster: CoffeeRoaster
    composition: {
        arabica?: number
        robusta?: number
        other?: number
    } | null
    roast: "light" | "medium" | "dark"
    origin: string | null
    description: string | null
}

type CoffeeBatch = {
    version: "0.1.0"
    blend: CoffeeBlend,
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
    _id: string

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
    _id: string
    version: "0.1.0"
    email: string
    emailVerified: boolean
    givenName: string
    familyName: string
    locale: string
    espressoMachines: EspressoMachine[]
    grinders: Grinder[]
    equipment: Equipment
    coffee: CoffeeBatch[]
    journalEntries: JournalEntry[]
}