import React from 'react';


const Teams = () => {
    return (
        <div className='Login'>
                <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div className="signup">
				<form  action="https://formsubmit.co/Officebobur34@gmail.com" method="POST" >
					<label for="chk" aria-hidden="true">Sign up</label>
					<input pattern='[a-z]*' type="text" name="txt" placeholder="User name" required=""/>
					<input  type="email" name="email" placeholder="Email" required=""/>
					<input  type="password" name="pswd" placeholder="Password" required=""/>
					<button>Sign up</button>
				</form>
			</div>

			<div class="login">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button>Login</button>
				</form>
			</div>
	</div>
        </div>
      
    );
};

export default Teams;