# Glossary

## Flow
Container consisting of [Nodes](#node) to model your intended behavior.

## Node
--8<-- "includes/glossary/node.md"

## Service
Snoty follows the IaC Service - Implementation pattern.
Most Services can be divided into generic business logic (`Impl` suffix) and technology-specific implementations (`<Technology>` prefix).

// TODO: better example, this one sucks, doesn't even use the "Service" suffix lol
For example, the `FlowRunner` is an interface implemented by only `FlowRunnerImpl`.
On the other hand, the `FlowService` is implemented by both `SqlFlowService` & `MongoFlowService` - two distinct implementations
that both follow the same specifications, but use two totally different backing technologies.

## Adapter
Bundles [Service](#service) implementations using a specific Technology or Strategy.
This can be as major as providing a database implementation (e.g. SQL & MongoDB Adapters), or just a singular
service implementation, such as a Message Bus for the Flow Event Streaming system.

Some Adapters may share a common configuration or connection. For example, the Redis Message Bus may use the same
centralized Redis connection as another Redis-backed Adapter, but you can opt to only use one of them.

Most services are mainly business logic that isn't supposed to be overwritten. Therefore, Adapters only exist
for services that make sense to be replaceable in a modular way.
Should you want to replace those services anyway, // TODO

## [Hook](/hooks)
--8<-- "includes/glossary/hook.md"

// TODO: confirm name
For example, the `PreBusinessHook` is called right before the business logic is started up, but after loading the Node Modules.
Therefore, you may visit all collected Modules, say, to implement automatic database migrations.

## Extension
Self-contained JAR files that can provide [Nodes](#node), [Adapters](#adapter), [Services](#service), [Hooks](#hook), etc.
