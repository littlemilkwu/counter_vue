var app = new Vue({
	el: '#app',
	data: {
		number: 0,
		top_limit: 10,
		bottom_limit: 0,

		top_limit_status: false,
		bottom_limit_status: false,
	},
	mounted: function (){
		this.checkLimit()
	},
	methods: {
		addNumber: function(){
			this.number = this.number + 1;
			this.checkLimit()
		},
		subNumber: function(){
			this.number = this.number - 1;
			this.checkLimit()
		},
		checkLimit: function(){
			if(this.number >= this.top_limit){
				this.top_limit_status = true
			}else if(this.number <= this.bottom_limit){
				this.bottom_limit_status = true
			}else {
				this.top_limit_status = false
				this.bottom_limit_status = false
			}
		}

	}
})