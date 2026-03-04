# Persistence
The Extension API includes high-level abstractions for many things. Among them are persistence services.

To save arbitrary data for later use (stateful Nodes), you can use the `NodePersistenceService`.
Its rudimentary API allows you to add, get and remove a number of entities by their ID.
Under the hood, your data is serialized using Kotlinx.serialization and persisted in a Key-Value data store.

## For Database Adapter developers
The simple interface shouldn't be too much of a challenge to implement, as long as you can persist JSON using a
composite of the Node ID and the Entity ID as the key.
