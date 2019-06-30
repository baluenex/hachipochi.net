window.onload = function() {
  var baseUrl = 'https://o8h9y9lig6.execute-api.ap-northeast-1.amazonaws.com/Prod/'

  var currentGenre = new Vue({
    el: "#currentGenre",
    data: {
      results: []
    },
    async mounted() {
      await this.getGenre();
      this.results = this.modifyItemInfo(this.results);
    },
    methods: {
      async getGenre() {
        let baseUrl = 'https://o8h9y9lig6.execute-api.ap-northeast-1.amazonaws.com/Prod/';
        let url = baseUrl + 'genre';
        await axios.get(url).then(response => {
          console.log(response.data);
          this.results = response.data;
        }).catch(error => {
          console.log(error);
        })
      },
      modifyItemInfo(data) {
        for (i=0; i<data.length; i++) {
          data[i].item_info = data[i].item_info.replace("\\", "");
          data[i].item_info = JSON.parse(data[i].item_info);
        }
        return data;
      }
    }
  });

  var registerGenre = new Vue({
    el: "#registerNewcomer",
    data: {
      newcomer: {
        cont_name: "",
        value: ""
      }
    },
    computed: {
      validation() {
        const newcomer = this.newcomer;
        return {
          cont_name : (newcomer.cont_name),
          value : (newcomer.value)
        }
      },
      isValid() {
        const validation = this.validation;
        return Object
          .keys(validation)
          .every(function (key) {
            return validation[key]
          })
      }
    },
    methods: {
      errorClassObject(key) {
        return {
          'has-error': (this.validation[key] == false)
        }
      },
      onSubmit() {
        console.log("新しい仲間を登録するよ！");
        let data = [{"cont_name": this.cont_name},{"value": this.value}]
        let url = baseUrl + 'genre'

        axios.post(url,JSON.stringify(data))
        .then((response) => {
          console.log(response.data);
        }).catch((error) => {
          console.log(error);
        });
        alert("登録を受け付けました。数分後、登録できています。")
        location.reload();
      }
    }
  });
}
