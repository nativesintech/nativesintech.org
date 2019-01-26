---
title: "Hello, world! 🌎"
date: "January 26, 2019"
tagline: "Why I chose ReasonML to build this site"
layout: "normal"
minRead: "6 minute"
author: "Adam Recvlohe"
tags: "reasonml, reason, functional programming"
---

You might be wondering why the heck I would choose ReasonML to build this site. Especially when there are languages like TypeScript or Flow that are more familiar to people. I'd like to share some of the reasons, pun intended 😄, for why I chose ReasonML/ReasonReact for the Natives in Tech website over any other programming language/framework.

## Programming is About Types

Programming is not all about types but types play a big role. When I first started learning JavaScript, a dynamically interpreted language, I thought more in terms of what I was doing with my functions than I was about the shape of the data. That's partly because I wasn't entirely aware of my types until I ran into a run-time error. Even then, all I would do is fix the issue and move on. I'd forget it happened and end up making the same mistake again and again. It would help to be aware of the types to prevent these senseless issues.

The trouble with this is your not capable of holding in your mind all of the data in your application. I mean, maybe if it's a small application, but for larger more complex applications it's impossible unless you're some rain man. That's where compilers come in. Compilers like Reason, or TypeScript, yell at you if you are handling data the wrong way. For example, if you call the JavaScript `Array.prototype.map` function on a `String` instead of an `Array`. This is a good thing. It prevents you from seeing this error at run-time and crashing the browser with an `undefined` error. You fix the issue right then and there and you move forward with greater confidence that it will compile and run.

You could argue that providing documentation on functions and objects prevents this. However, at the end of the day, you are still relying on human perfection. There is none. That's why they call it human error. The compiler doesn't have a bad day, doesn't shut things down early, and doesn't skip over fixing something thinking they will come back later to update it. It does everything it needs to do and does it well. That doesn't mean it's perfect. But it's well above the abilities of humans to hold the entire state of the application in its RAM.

## TEA is Sound and I like Components

When I started to learn about functional programming I heard about this language called Elm which inspired libraries like `redux`. Elm comes packed with The Elm Architecture, called TEA, which is composed of three main parts. The `model`, which is the shape of the data in your application, the `update` function, which handles actions coming from the DOM, and the `view` function, which renders the view in accordance with the current state of the `model`. This pattern is simple to follow and handles dynamic data safely. You never interact with the state directly. Instead, state is the result of a function that takes an action and the current state and returns a new state.

Furthermore, Elm constrains the developer to have one top-level component that houses all the state of the application, forcing them to then propagate those values to components further down the tree by passing them as props. This seems a bit tedious to me and additionally, I like thinking in terms of components that can handle their own state. It doesn't mean every component should have its own state but rather it's trivial to do so. ReasonReact is the best of both worlds. It provides an easy to use API to interact with state, similar to Elm and allows me to create components with ease. There is not much else I could ask for.

But Adam, why are you using ReasonReact, a framework for applications, for a site that is static? Application development, even static site application development, is dynamic. I don't have much complexity in this application currently but that doesn't mean I won't ever have more complexity. I'd rather have something I don't need it than something I need and not have. It's kind of like insurance. If you're a backend developer you might scoff at this notion. Why would I use Rails when all I need is Sinatra? If you want to interact with the DOM without static type analysis or a simple reactive state convention be my guest. I for one, don't want to waste time on simple errors. I would rather spend that time adding more features.

## Not All Languages are Created Equal

But Adam, why not use TypeScript/TSX? There is a lot of hype around TypeScript at the moment. For good reason. It has a lot of nice developer tooling. However, as the title implies, not all typed languages are built the same. Although more people are getting into writing JS types, the strictness of these types depends on the developer. That means the ecosystem is built on human error once again. I want to specifically point out the use of `any` in TypeScript. This concept does not exist in ReasonML and therefore allows me to have more confidence in the libraries and tools I am using.

Another example here is `null` or `undefined` does not exist in ReasonML. This reduces a whole host of common errors that you would see at run-time. Instead of these pointer errors, ReasonML uses the `option` type. If a value does not exist, ReasonML returns `None` and if the value does exist it will return a `Some(value)`. Something as simple as getting an array value at a certain index can have grave consequences if not handled properly. When using ReasonML, I don't have to worry about this. And to be completely honest, I would rather not be thinking about these lower level things that beginners and veterans alike get tripped up on.

## Anyone Can and Anyone Should Contribute

With that in mind, I want to use a language that prevents mistakes for contributors whether they are new to development or have been developing for many years. Based on the current setup, a contributor can't write incorrect styles. The compiler will yell at the developer if they type in incorrect style property or style value. The same goes for HTML. In this case, it's JSX but potato tomato. If they miss a closing tag or do not close a tag correctly the application will not compile. If they try to access a field that does not exist on an object, the developer will see an indicator in their editor that the field value cannot be accessed. I could go on but you get the picture.

In general, I want anyone to contribute and I want to make it very hard for them to make a mistake. I can then have more confidence in the pull requests they submit and nobody gets tripped up by the small stuff. If more beginner developers, contribute then they can witness the benefits of using types and type-safe functions. If they are more experienced, they can be amazed at the speed of development and ease of using a language like ReasonML. I can't lose, right? Who is to really say. But at least when I write this application I will be happy.

## Summary

I hope this explains well the intentions and thoughts behind using a language like ReasonML and a framework like ReasonReact. I have used it quite extensively over the past few months on a few projects. I was inclined to think that I only had something like Gatsby.js at my disposal but was really happy to find Phenomic. It's still in its early stages of development but from using it for the past month it's been great once I got a handle on it. For any new developer out there, I recommend learning some statically typed language, even if it's not ReasonML. The benefit of having such a language in your background is tremendous especially in the field of web development. And if you are a developer of many languages, give ReasonML and try and take note of two things: how quick it is to build and how flexible it is as a language. I think you will find this to be very liberating.
