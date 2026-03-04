# Hooks
## Definition
--8<-- "includes/glossary/hook.md"

## Available Hooks
### `PreBusinessStartupHook`
Starts between initializing Extensions and starting the business logic (REST API & scheduler).
Therefore, it can access all collected Extensions & Node Handlers.

Used to run Database Transactions, which require looping through all usages of Node-scoped persistency services.

### `NodeapiRoutesHook`
Receives an instance of Ktor's `Routing` DSL, allowing you to define your own routes.
In most cases, it is recommended to use the abstractions provided by `NodeRouteFactory` & `NodeHandlerRouteFactory`.

### `NodeDeletedHook`
Implement to clean up Node data when one is deleted.
