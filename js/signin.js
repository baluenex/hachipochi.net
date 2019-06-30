const poolData = {
    UserPoolId : "ap-northeast-1_sODqcFKaV",
    ClientId : "3do9ag3omvu7db1lck66rtv9j7"
};
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

$(document).ready(function() {

	AWSCognito.config.region = 'ap-northeast-1'; // リージョン
	AWSCognito.config.credentials = new AWS.CognitoIdentityCredentials({
	    IdentityPoolId: "ap-northeast-1:a597f0c8-331f-4a77-bab7-d8f472f8f8b0"
	});

	$("#signinButton").click(function(event) {
		signIn();
	});
});

var signIn = function() {
    var email = $('#email').val();
    var password = $('#password').val();

    if (!email | !password) {
    	$("#signin div#message span").empty();
    	$("#signin div#message span").append("All fields are required.");
    	return false;
    }

    var authenticationData = {
        Username: email,
        Password: password
    };
    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);

    var userData = {
        Username: email,
        Pool: userPool
    };
    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            var idToken = result.getIdToken().getJwtToken();          // IDトークン
            var accessToken = result.getAccessToken().getJwtToken();  // アクセストークン
            var refreshToken = result.getRefreshToken().getToken();   // 更新トークン

            console.log("idToken : " + idToken);
            console.log("accessToken : " + accessToken);
            console.log("refreshToken : " + refreshToken);

            window.location = "./manage.html";
        },
        onFailure: function(err) {
            console.log(err);
            $("div#message span").empty();
            $("div#message span").append(err.message);
        }
    });
};
