<template>
	<div class="container-fluid">
		<div class="row justify-content-center">
			<div class=" col-lg-6 col-md-8">
				<div class="card p-3">
					<div class="row justify-content-center">
						<div class="col-12">
							<h2 class="heading text-center">Event</h2>
						</div>
					</div>
					<form onsubmit="event.preventDefault()" class="form-card">
						<div class="row justify-content-center mb-4 radio-group">
							<div class="col-sm-4">
								<a @click.prevent="mad" href="#">
									<div :style="{ border: color }" class="radio  mx-auto" data-value="mada">
										<img
											class="fit-image"
											src="https://raw.githubusercontent.com/api5454/no/master/mada_logo.jpeg"
											width="120px"
											height="55px"
										/>
									</div>
								</a>
							</div>
							<div class="col-sm-4">
								<a @click.prevent="mas" href="#">
									<div :style="{ border: color2 }" class="radio mx-auto" data-value="master">
										<img
											class="fit-image"
											src="https://i.imgur.com/WIAP9Ku.jpg"
											width="120px"
											height="55px"
										/>
									</div>
								</a>
							</div>
							<div class="col-sm-4">
								<a @click.prevent="pay" href="#">
									<div :style="{ border: color3 }" class="radio mx-auto" data-value="paypal">
										<img
											class="fit-image"
											src="https://i.imgur.com/cMk1MtK.jpg"
											width="120px"
											height="55px"
										/>
									</div>
								</a>
							</div>
							<br />
						</div>
						<div class="row justify-content-center">
							<div class="col-12">
								<p>There Is No Cancellation For Reservation</p>
							</div>
						</div>
						<div v-if="master === false && payp === true">
							<div class="row justify-content-center">
								<div class="col-12">
									<div class="input-group">
										<input type="text" name="Price" placeholder="The Price" /> <label>Price</label>
									</div>
								</div>
							</div>
							<div class="row justify-content-center">
								<div class="col-md-12">
									<input type="submit" value="PayPal" class="btn btn-pay placeicon" />
								</div>
							</div>
						</div>
						<div v-if="master === true && payp === false">
							<div class="row justify-content-center form-group">
								<div class="col-12 px-auto">
									<div class="custom-control custom-radio custom-control-inline">
										<input
											id="customRadioInline1"
											type="radio"
											name="customRadioInline1"
											class="custom-control-input"
											checked="true"
										/>
										<label for="customRadioInline1" class="custom-control-label label-radio"
											>Private</label
										>
									</div>
									<div class="custom-control custom-radio custom-control-inline">
										<input
											id="customRadioInline2"
											type="radio"
											name="customRadioInline1"
											class="custom-control-input"
										/>
										<label for="customRadioInline2" class="custom-control-label label-radio"
											>Business</label
										>
									</div>
								</div>
							</div>
							<div class="row justify-content-center">
								<div class="col-12">
									<div class="input-group">
										<input type="text" name="Name" placeholder="John Doe" /> <label>Name</label>
									</div>
								</div>
							</div>
							<div class="row justify-content-center">
								<div class="col-12">
									<div class="input-group">
										<input
											type="text"
											id="cr_no"
											name="card-no"
											placeholder="0000 0000 0000 0000"
											minlength="19"
											maxlength="19"
										/>
										<label>Card Number</label>
									</div>
								</div>
							</div>
							<div class="row justify-content-center">
								<div class="col-12">
									<div class="row">
										<div class="col-6">
											<div class="input-group">
												<input
													type="text"
													id="exp"
													name="expdate"
													placeholder="MM/YY"
													minlength="5"
													maxlength="5"
												/>
												<label>Expiry Date</label>
											</div>
										</div>
										<div class="col-6">
											<div class="input-group">
												<input
													type="password"
													name="cvv"
													placeholder="&#9679;&#9679;&#9679;"
													minlength="3"
													maxlength="3"
												/>
												<label>CVV</label>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="row justify-content-center">
								<div class="col-md-12">
									<input type="submit" value="Pay 100 EUR" class="btn btn-pay placeicon" />
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
require(['aos'], function(AOS) {
	AOS.init({
		easing: 'ease-in-out-sine',
	});
});
/*
$(document).ready(function(){

//For Card Number formatted input
var cardNum = document.getElementById('cr_no');
cardNum.onkeyup = function (e) {
if (this.value == this.lastValue) return;
var caretPosition = this.selectionStart;
var sanitizedValue = this.value.replace(/[^0-9]/gi, '');
var parts = [];

for (var i = 0, len = sanitizedValue.length; i < len; i +=4) { parts.push(sanitizedValue.substring(i, i + 4)); } for (var i=caretPosition - 1; i>= 0; i--) {
    var c = this.value[i];
    if (c < '0' || c> '9') {
        caretPosition--;
        }
        }
        caretPosition += Math.floor(caretPosition / 4);

        this.value = this.lastValue = parts.join('-');
        this.selectionStart = this.selectionEnd = caretPosition;
        }

        //For Date formatted input
        var expDate = document.getElementById('exp');
        expDate.onkeyup = function (e) {
        if (this.value == this.lastValue) return;
        var caretPosition = this.selectionStart;
        var sanitizedValue = this.value.replace(/[^0-9]/gi, '');
        var parts = [];

        for (var i = 0, len = sanitizedValue.length; i < len; i +=2) { parts.push(sanitizedValue.substring(i, i + 2)); } for (var i=caretPosition - 1; i>= 0; i--) {
            var c = this.value[i];
            if (c < '0' || c> '9') {
                caretPosition--;
                }
                }
                caretPosition += Math.floor(caretPosition / 2);

                this.value = this.lastValue = parts.join('/');
                this.selectionStart = this.selectionEnd = caretPosition;
                }

                // Radio button
                $('.radio-group .radio').click(function(){
                $(this).parent().parent().find('.radio').removeClass('selected');
                $(this).addClass('selected');
                });
                })*/
export default {
	name: 'payment',
	data() {
		return {
			link: '/signup',
			master: false,
			payp: false,
			color: '2px solid gray',
			color2: '2px solid gray',
			color3: '2px solid gray',
		};
	},
	methods: {
		mas() {
			this.master = true;
			this.payp = false;
			this.color2 = '3px solid blue';
			this.color3 = '2px solid gray';
			this.color = '2px solid gray';
		},
		pay() {
			this.master = false;
			this.payp = true;
			this.color2 = '2px solid gray';
			this.color3 = '3px solid blue';
			this.color = '2px solid gray';
		},
		mad() {
			this.color = '3px solid blue';
			this.color2 = '2px solid gray';
			this.color3 = '2px solid gray';
			this.master = false;
			this.payp = false;
		},
	},
};
</script>
