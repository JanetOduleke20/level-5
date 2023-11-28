<template>
<div class="row container">
  <div class="col-md--6">
    <!-- // <img alt="Vue logo" src="./assets/logo.png"> -->
  </div>
  <div class="col-md-6">
    <div>
      <p class="fw-bolder fs-4">Happening Now</p>
      <p class="fw-bold fs-2">Join now.</p>
    </div>
    <div>
      <button class="btn btn-md rounded-md text-dark bg-light border-secondary text-center px-3 py-1 my-2">Sign up with Google</button>
      <button class="btn btn-md rounded-md text-dark bg-light border-secondary text-center px-3 py-1 my-2">Sign up with Apple</button>
      <p class="text-center mx-auto">or</p>
      <button class="btn btn-md rounded-md text-light fw-bold bg-info border-secondary text-center px-3 py-1 my-2">Create an account</button>
    </div>
    <div>
      <small>By signing up, you agree to the <a>Terms of Service</a>and <a>Privacy Policy</a>, including <a>Cookie Use.</a></small>
    </div>
  </div>

  <div class="mt-3">
    <p class="fw-bold fs-2" >Already have an account?</p>
      <button class="btn btn-md rounded-md text-info fw-bold bg-light border-secondary text-center px-3 py-1 my-2">Sign in</button>
  </div>

  <div>{{count}}</div>
</div>
</template>

<script>

import {useUserStore} from '../stores/UserStore'
export default {
  setup() {
    const userStore = useUserStore();
    const count = userStore.count;

    return {userStore, count}
  }
}
</script>