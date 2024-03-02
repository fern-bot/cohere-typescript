/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Cohere from "..";

export interface ChatStreamEndEvent extends Cohere.ChatStreamEvent {
    /**
     * - `COMPLETE` - the model sent back a finished reply
     * - `ERROR_LIMIT` - the reply was cut off because the model reached the maximum number of tokens for its context length
     * - `MAX_TOKENS` - the reply was cut off because the model reached the maximum number of tokens specified by the max_tokens parameter
     * - `ERROR` - something went wrong when generating the reply
     * - `ERROR_TOXIC` - the model generated a reply that was deemed toxic
     */
    finishReason: Cohere.ChatStreamEndEventFinishReason;
    /** The consolidated response from the model. Contains the generated reply and all the other information streamed back in the previous events. */
    response: Cohere.NonStreamedChatResponse;
}
