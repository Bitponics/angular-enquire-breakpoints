angular-enquire-breakpoints
===========================

AngularJS directive wrapper for responding to CSS media queries via Enquire.js

Setup
===========================

Add directive to markup.

```html
<body data-breakpoints>
```

Define your breakpoints. If looking to stay DRY and define breakpoints in one place, take a look at xx approach.

```javascript
var breakpoints = {
	$mq_smaller: "screen and (min-width: 20em)",
	$mq_small: "screen and (min-width: 30em)",
	$mq_small_height: "screen and (min-height: 50em)",
	$mq_medium: "screen and (min-width: 40em)",
	$mq_large: "screen and (min-width: 50em)",
	$mq_larger: "screen and (min-width: 65em)"
};
```

Set your event listeners for whatever media query setup, destroy, match or un-match.

```javascript
//set show/hide of nav based on $mq_medium
$scope.$on('match', function(event, mq) {
	if (mq === '$mq_medium') $scope.navMenuDisplayVisible = true;
});
$scope.$on('unmatch', function(event, mq) {
	if (mq === '$mq_medium') $scope.navMenuDisplayVisible = false;
});
```
