/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * (internal) Sets inference and model options for RAG search query and tool use generations. Defaults are used when options are not specified here, meaning that other parameters outside of search_options are ignored (such as model= or temperature=).
 */
export interface ChatRequestSearchOptions {
    model?: unknown;
    temperature?: unknown;
    maxTokens?: unknown;
    preamble?: unknown;
}
