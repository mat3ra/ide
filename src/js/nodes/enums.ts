import type { QueueNameEnum } from "@mat3ra/esse/dist/js/types";

/**
 * The queue names live in esse (`compute/queue-name-enum`); re-exported under ide's existing name.
 */
export { QueueNameEnum as QUEUE_TYPES } from "@mat3ra/esse/dist/js/types";

// Keyed by `QueueNameEnum` (esse `compute/queue-name-enum`) so adding a queue there fails to
// compile until it gets a label here.
const QUEUE_DISPLAY_BY_NAME: Record<QueueNameEnum, string> = {
    D: "debug (D)",
    OR: "ordinary regular (OR)",
    OR4: "4 cores ordinary regular (OR4)",
    OR8: "8 cores ordinary regular (OR8)",
    OR16: "16 cores ordinary regular (OR16)",
    SR: "saving regular (SR)",
    SR4: "4 cores saving regular (SR4)",
    SR8: "8 cores saving regular (SR8)",
    SR16: "16 cores saving regular (SR16)",
    OF: "ordinary fast (OF)",
    OFplus: "ordinary fast plus (OFplus)",
    SF: "saving fast (SF)",
    SFplus: "saving fast plus (SFplus)",
    GOF: "1 GPU ordinary fast (GOF)",
    G4OF: "4 GPUs ordinary fast (G4OF)",
    G8OF: "8 GPUs ordinary fast (G8OF)",
    GP4OF: "4 GPUs ordinary fast (GP4OF)",
    GSF: "1 GPU saving fast (GSF)",
    G4SF: "4 GPUs saving fast (G4SF)",
    G8SF: "8 GPUs saving fast (G8SF)",
    GPSF: "1 GPU saving fast (GPSF)",
    GP2SF: "2 GPUs saving fast (GP2SF)",
    GP4SF: "4 GPUs saving fast (GP4SF)",
};

/** Pre-2020 spellings of `OFplus`/`SFplus` (renamed 2020-10); legacy job documents may still store them. */
const LEGACY_QUEUE_DISPLAY: Record<string, string> = {
    "OF+": "ordinary fast plus (OF+)",
    "SF+": "saving fast plus (SF+)",
};

// Plain string index: the backend may report queue names that are not (yet) in `QueueNameEnum`.
export const QUEUE_DISPLAY: Record<string, string> = {
    ...QUEUE_DISPLAY_BY_NAME,
    ...LEGACY_QUEUE_DISPLAY,
};

export const ETA = {
    withinOneMin: {
        display: "within 1 min",
        order: 10,
    },
    withinFiveMin: {
        display: "less than 5 min",
        order: 20,
    },
    withinTenMin: {
        display: "within 10 min",
        order: 30,
    },
    withinOneHour: {
        display: "within 1 hour",
        order: 40,
    },
    moreThanHour: {
        display: "more than 1 hour",
        order: 50,
    },
} as const;

export const TIME_LIMIT_TYPES = {
    single: "per single attempt",
    compound: "compound",
} as const;

export const IS_RESTARTABLE = {
    yes: true,
    no: false,
} as const;
