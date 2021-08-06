# Rendering on the web

## Motivation

Over the past years JavaScript frameworks have created new patterns for rendering to achieve the optimal performance for page rendering.

This guide tries to explain the different patterns and discuss their pros and cons using Next.js.

## Performance

But first lets talk about performance. To understand the performance characteristics of a website we need to answer two simple questions.

- When is our app working?
- Where is our app working?

### When

At what point in time does our app needs to work?

#### Build-Time

Doing work at buildtime means our app is working (gathering data, rendering) when we compile our app.

#### Run-Time

Doing work at run-time means our app needs to work (gathering data, rendering), when the app is running.

### Where

Where is the work beeing done?

#### at Edge

Inside our CDN network.

#### on our Server

On our server.

#### on the client

Inside the browser of our users.

## Rendering patterns

### 1. Tranditional Static Rendering

Lets begin with a very simple example. We have a static html somewhere and just ship it by using a static webserver.

- [Code](./public/traditional-static-rendering.html)
- [URL](http://localhost:3000/api/traditional-ssr)

This approach is probably the fastes when it comes to performance.

- FCP ⭐️⭐️⭐️⭐️⭐️
- TTI ⭐️⭐️⭐️⭐️⭐️

### 2. Traditional Server Side Rendering

This approach creates the HTML markup on the server using simple string concatnation.

- [Code](./pages/api/traditional-ssr.js)
- [URL](http://localhost:3000/api/traditional-ssr)

- FCP ⭐️⭐️⭐️⭐️
- TTI ⭐️⭐️⭐️⭐️⭐️

### 3. Modern Server Side Rendering

This approach creates the HTML markup on the server using simple a modern JS Framework (React.js)

- [Code](./pages/api/modern-ssr.js)
- [URL](http://localhost:3000/api/modern-ssr)

- FCP ⭐️⭐️⭐️
- TTI ⭐️⭐️⭐️⭐️⭐️

### 4. Modern Server Side Rendering with Client Side Rendering (hydration)

This approach creates the HTML markup on the server using simple a modern JS Framework (React.js) and hydrates the markup on the client using React.js.

- [Code](./pages/modern-ssr-with-hydration.js)
- [URL](http://localhost:3000/modern-ssr-with-hydration)

- FCP ⭐️⭐️⭐️
- TTI ⭐️⭐️⭐️⭐️

### 5. Modern Static Side Rendering with Client Side Rendering (hydration)

Here we render our HTML code at build time using a modern framework and hydrate the markup from the server on the client at runtime.

- [Code](./pages/modern-ssg-with-hydration.js)
- [URL](http://localhost:3000/modern-ssg-with-hydration)

- FCP ⭐️⭐️⭐️⭐️⭐️
- TTI ⭐️⭐️⭐️⭐️

### 6. Modern Client Side Rendering with hydration

- [Code](./pages/modern-ssg-with-hydration.js)
- [URL](http://localhost:3000/modern-ssg-with-hydration)

- FCP ⭐️⭐️
- TTI ⭐️⭐️⭐️

## Diagramm:

https://swimlanes.io/#3VbLUsIwFF3br7hL6Agf0IULwecIzlD3NiYXiIYEkwDy96ZNn6B1RgcZ3bTT5OQ+zrn3ppZbgRFMUDLUXM5gw+0cxvhm+88mCJR2yxEMcY1CLVGfQox6nb4Hw/EpnGu1MaiDgE8jGMQT6DyG4UBwlBZibrGyG4aP3QAqQ9A7S02kppdCbQEXS7uF64fRHQwVbUNSb54qhkGvF0GoV9LyBUahO5UHVJ65kdxyIlwcrys01iHccrqbAyOXj2Ru2yyVNNi0UGKSCRJqh/ejvs7ySeq4wlUyRUvnya6rhp0Ssu+ujtPo/QTu6bmN46uM29gSy6nn9golavep5Efklh+18L12eRIPKrapMkkb2R6KzCvDjqgMCuPqNMzKc75leeKfMVgp5rF4DMl8O3jSnWTsi3bwwJJN489lbB6K9JOc88L1pdIbolm1nwdfg9SK6eNaqo5kLnf765+pzIvO5JJqXDgpHL2/0aXfq5a9fobOlAjxROhL63g+RGsbRxW6iJqlUUttgjNPHtZMFeXVwK2J4CzFdZ5WXLBuVbhFTANC51jqC3+v0C7ycXLBZljcrbptnBz5Ami769MUBFkwArfxDydXtlkwAZ2VSf9hKgem+79Gzjs=
