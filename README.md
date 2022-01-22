# Demo project to start for any sort of new React native project done by Waleed iqbal 
# Starting file is index.js  // it can be ts 
# TypeScript based for typings
# index.js leads to App.ts inside src
# App.ts file i always put for future app level working like notifications or sockets or network handler 
# Router.ts file in src is for routing 
# Provider design pattern used based on Redux instead of context apis but can use them up on need 
# Project structure based on some basic folders like
 
# -> Common for some common files like configrations etc 
# -> Components for generic reuseable components like loader, header etc 
# -> Redux folder hold all redux base working including reducers & store, actions 
# -> Res holds resources can be images, helper functions,  images, audios, static texts etc ..
# Screen folder holds all components for UI base on modules 
# Services folder hold basically apis calling functions which can be called inside actions components like before dispatching if we need data from api there we make url dynamically and send that to this services component and on response we dispatch actions to reducers 





