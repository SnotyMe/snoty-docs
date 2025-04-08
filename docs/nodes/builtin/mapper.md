The Mapper Node transforms data from one format to another. It is useful for converting data structures, changing data
types, or applying custom transformations to the data.

To achieve this, Templating languages are used to define the transformation rules. The Mapper Node supports both Liquid
and, for simpler use cases, a custom-made templating language that merely supports replacing variables with their
values.

Since the two engines are totally different, they will be addressed separately.

## Replace

The Batch-inspired syntax allows replacing variable names with their values. The syntax is as follows:

```text
%variable%
```

By using this, simple replacements can be made such as:

```text
This assignment is due on %due_date%.
```

Accessing nested variables is also possible:

```text
This assignment is due on %course.assignment.due_date%.
```

That's it, for all other use cases, Liquid should be used. Therefore, it is mainly useful when your data already has
the correct data types, the names are simply incompatible.

## Liquid

The Shopify-developed engine is a powerful and flexible templating language that allows for complex data
transformations. It supports loops, conditionals, filters, and more.  
The [Liqp](https://github.com/bkiers/Liqp) library provides the Liquid templating engine. Therefore, the behavior may
not mimic the original Ruby-based Liquid engine perfectly. For the most part, it should work as expected though.

As Liquid is a nicely documented language with a ton of features, please refer to the official documentation:
<https://shopify.github.io/liquid/basics/introduction/>

Apart from the generic features, Snoty also provides some custom filters and tags:

1. `unidiff` filter <!-- md:version 0.5.0 -->
    - This filter is used to convert a list of dictionaries into a unified diff format. It takes a list of dictionaries
      and returns a string representing the unified diff.
    - Example:
      ```liquid
      {% assign diff = diff.change.description.old | unidiff diff.change.description.new %}
      ```
2. `format` filter <!-- md:version next -->

## Examples
### List all changes
````liquid
## WebUntis-Änderung!

{% for diff in diff.change %}
- Change: {{ diff[0] }}
  ```json
  {{ diff[1] | json }}
  ```
{% endfor %}
````
