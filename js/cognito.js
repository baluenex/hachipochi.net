// ユーザープールの設定
const poolData = {
    UserPoolId : "ap-northeast-1_sODqcFKaV",
    ClientId : "3do9ag3omvu7db1lck66rtv9j7"
};
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
const cognitoUser = userPool.getCurrentUser();  // 現在のユーザー

var currentUserData = {};  // ユーザーの属性情報

/**
 * 画面読み込み時の処理
 */
$(document).ready(function() {
    AWSCognito.config.region = 'ap-northeast-1'; // リージョン
    AWSCognito.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: "ap-northeast-1:a597f0c8-331f-4a77-bab7-d8f472f8f8b0"
    });

    getUserAttribute();
});

var getUserAttribute = function(){
    if (cognitoUser != null) {
        cognitoUser.getSession(function(err, session) {
            if (err) {
                console.log(err);
                $(location).attr("href", "signin.html");
            } else {
                cognitoUser.getUserAttributes(function(err, result) {
                    if (err) {
                        $(location).attr("href", "signin.html");
                    }
                });
            }
        });
    } else {
        $(location).attr("href", "signin.html");
    }
};
