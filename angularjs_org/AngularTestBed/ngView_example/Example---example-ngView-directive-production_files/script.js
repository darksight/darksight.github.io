.view-animate-container {
  position:relative;
  height:100px!important;
  background:white;
  border:1px solid black;
  height:40px;
  overflow:hidden;
}

.view-animate {
  padding:10px;
}

.view-animate.ng-enter, .view-animate.ng-leave {
  transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;

  display:block;
  width:100%;
  border-left:1px solid black;

  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  padding:10px;
}

.view-animate.ng-enter {
  left:100%;
}
.view-animate.ng-enter.ng-enter-active {
  left:0;
}
.view-animate.ng-leave.ng-leave-active {
  left:-100%;
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
