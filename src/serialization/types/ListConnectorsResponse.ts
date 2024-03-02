/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Cohere from "../../api";
import * as core from "../../core";

export const ListConnectorsResponse: core.serialization.ObjectSchema<
    serializers.ListConnectorsResponse.Raw,
    Cohere.ListConnectorsResponse
> = core.serialization.object({
    connectors: core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).Connector)),
    totalCount: core.serialization.property("total_count", core.serialization.number().optional()),
});

export declare namespace ListConnectorsResponse {
    interface Raw {
        connectors: serializers.Connector.Raw[];
        total_count?: number | null;
    }
}
