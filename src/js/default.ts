import type { ComputeArgumentsSchema } from "@mat3ra/esse/dist/js/types";

import { QUEUE_TYPES } from "./nodes/enums";

export function getDefaultComputeConfig(): ComputeArgumentsSchema {
    return {
        ppn: 1,
        nodes: 1,
        queue: QUEUE_TYPES.debug,
        timeLimit: "01:00:00",
        notify: "n",
        cluster: {
            fqdn: "",
        },
    };
}
