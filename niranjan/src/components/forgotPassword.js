import React from 'react'

export default function ForgotPassword() {
  return (
   <>
    <div class="card">
        <p class="lock-icon">
            <i class="fas fa-lock"></i>
        </p>
        <h2>Forgot Password?</h2>
        <p>You can reset your Password here</p>
        <input type="text" class="passInput" placeholder="Email address" />
        <button>Send My Password</button>
    </div>
   </>
  )
}
