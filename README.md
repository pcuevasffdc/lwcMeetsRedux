# Maintaining social distancing between LWCs: a Redux solution

## Component List

* `CatTrackerAppContainer`: The container component for the App. This component is exposed and included in the `Cat_Tracker`flexipage. It also sets the debug logger to `true`.
* `CatTracker`: The main component for the app, includes the `CatCard` and `CatList` components.
* `CatCard`: The necessary fields to register a cat. Contains a button that dispatches the `REGISTER_CAT` when clicked.
* `Cat`: The profile for a cat.
* `CatList`: A component that renders a list of profiles for all the cats that have been registered.
* `CatTrackerConstants`: With the constants for the actions to be distpatched.