<script>
	// @ts-nocheck

	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		const scrollOffset = 100;
		const scrollElements = document.querySelectorAll('.js-scroll');

		var throttleTimer;

		const throttle = (callback, time) => {
			if (throttleTimer) return;

			throttleTimer = true;
			setTimeout(() => {
				callback();
				throttleTimer = false;
			}, time);
		};

		const elementInView = (el, dividend = 1) => {
			const elementTop = el.getBoundingClientRect().top;

			return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
		};

		const elementOutofView = (el) => {
			const elementTop = el.getBoundingClientRect().top;

			return elementTop > (window.innerHeight || document.documentElement.clientHeight);
		};

		const displayScrollElement = (element) => {
			element.classList.add('translate-y-0');
			element.classList.remove('translate-y-32');
			element.classList.add('opacity-100');
		};

		const hideScrollElement = (element) => {
			element.classList.remove('translate-y-0');
			element.classList.add('translate-y-32');

			element.classList.remove('opacity-100');
		};

		const handleScrollAnimation = () => {
			scrollElements.forEach((el) => {
				if (elementInView(el, 1.15)) {
					displayScrollElement(el);
				} else if (elementOutofView(el)) {
					hideScrollElement(el);
				}
			});
		};
		var timer = 0;
		var count = 0;
		var scroll = 0;

		window.addEventListener('scroll', () => {
			throttle(() => {
				handleScrollAnimation();
			}, 250);
		});
	});
</script>

<div class="flex flex-col h-full bg-gray-50">
	<header class="relative py-8 z-10">
		<div class="container">
			<nav class="w-full rounded-3xl flex content-center">
				<img src="/logo.svg" alt="Netherlands" class="h-8 w-auto inline-block mr-2" />
				<h2 class="font-bold inline-block text-2xl">Hazelint</h2>
			</nav>
		</div>
	</header>
	<main class="flex-1 mb-24">
		<div class="container relative pb-12 lg:pb-16 xl:pb-20">
			<div
				class="px-4 mx-auto mt-14 max-w-screen-xl sm:mt-16 sm:px-6 md:mt-20 lg:mt-24 xl:mt-32 relative"
			>
				<div class="text-center">
					<h1
						class="text-3xl font-extrabold tracking-tight text-gray-900 leading-10 sm:text-4xl sm:leading-none md:text-5xl"
					>
						<span class="text-[#007AFF]">Hazelint</span> Analytics<br />Simple. Private. Effective.
					</h1>
					<p
						class="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
					>
						Navigate data effortlessly with Hazelint Analytics, hosted in the EU for added security
						and fully compliant with GDPR laws. Experience the effectiveness of analytics redefined,
						where simplicity and privacy converge for unparalleled results.
					</p>
				</div>
				<div class="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
					<div class="shadow rounded-md">
						<a
							id="scroll-features"
							href="#scroll-features"
							class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-[#007AFF] border border-transparent leading-6 rounded-md focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
						>
							See features
						</a>
					</div>
				</div>
			</div>
			<div class="mt-52 relative">
				<div class="container text-center">
					<h2 class="text-3xl font-extrabold text-gray-900 leading-9">Features</h2>
					<p
						class="max-w-md mx-auto mt-300 md:mt-5 md:max-w-3xl mt-4 text-lg text-gray-500 leading-7 mb-5"
					>
						Elevate your analytics game with Hazelint, offering precise pageview and unique visitor
						tracking, GDPR compliance, and EU-based hosting, ensuring businesses a robust,
						all-encompassing solution for secure and insightful data analysis.
					</p>
				</div>

				<div class="container grid grid-cols-2 grid-rows-1 gap-3 p-0">
					<div
						class="row-span-1 col-span-2 lg:col-span-1 px-16 py-20 flex flex-col bg-black rounded-2xl relative justify-center transition
						ease-in
						duration-1000 js-scroll opacity-0 translate-y-32"
					>
						<div class="inline-block">
							<h4 class="text-5xl font-bold text-white mb-3">Unique visitors.</h4>
							<p
								class="text-3xl bg-gradient-to-r from-[#970dc9] to-[#007AFF] bg-clip-text text-transparent font-semibold"
							>
								Compliant with European data protection laws, it provides accurate analytics without
								compromising individual privacy.
							</p>
						</div>
					</div>
					<div
						class="row-span-1 col-span-2 lg:col-span-1 px-16 py-20 flex flex-col custom-radiant-purple rounded-2xl relative translate-y-32 top transition
						ease-in
						duration-1000 js-scroll opacity-0"
					>
						<div class="inline-block">
							<h4 class="text-4xl font-bold text-white mb-2">
								Tailor event tracking to your business needs, gaining valuable insights into user
								interactions and enhancing your analytics capabilities effortlessly.
							</h4>
						</div>
					</div>
				</div>
				<div class="container mt-3 grid grid-cols-2 grid-rows-1 gap-3 p-0">
					<div
						class="row-span-1 col-span-2 lg:col-span-2 flex flex-col rounded-2xl relative bg-white overflow-hidden transition
						ease-in
						duration-1000 js-scroll opacity-0 translate-y-32"
					>
						<div class="inline-block px-16 pt-20 pb-60">
							<h4
								class="text-5xl leading-normal font-bold mb-2 bg-gradient-to-l from-[#B8CE66] via-[#61A87B] to-[#007AFF]/85 bg-clip-text text-transparent"
							>
								Pageview tracking.
							</h4>
							<p class="text-3xl text-black font-semibold">
								Meticulously designed for privacy and in compliance with European laws, it offers
								detailed insights into user interactions, ensuring a secure and lawful data tracking
								solution for your business.
							</p>
						</div>
						<figure
							class="bg-[url('/graph.svg')] w-[600px] md:w-[1143px] lg:w-[1600px] bg-center bg-no-repeat bg-cover absolute bottom-0 top-auto
							 h-60 rounded-2xl md:-translate-x-20 lg:-translate-x-60 translate-y-5"
						></figure>
					</div>
				</div>
			</div>
			<div class="container grid grid-cols-2 grid-rows-1 gap-3 p-0 mt-3">
				<div
					class="row-span-1 col-span-2 lg:col-span-1 px-16 py-20 flex flex-col bg-black rounded-2xl relative justify-center transition
					ease-in
					duration-1000 js-scroll opacity-0 translate-y-32"
				>
					<div class="inline-block">
						<h4 class="text-5xl font-bold text-white mb-3">GDPR Compliant.</h4>
						<p
							class="text-3xl bg-gradient-to-r from-[#B8CE66] via-[#61A87B] to-[#007AFF]/85 bg-clip-text text-transparent font-semibold"
						>
							Ensuring seamless adherence to privacy laws, this feature guarantees that your data
							practices align with GDPR regulations, offering peace of mind and trustworthy
							analytics for your business.
						</p>
					</div>
				</div>
				<div
					class="row-span-1 col-span-2 lg:col-span-1 px-16 py-20 flex flex-col custom-radiant-yellow rounded-2xl relative translate-y-32 top transition
					ease-in
					duration-1000 js-scroll opacity-0"
				>
					<div class="inline-block">
						<h4 class="text-4xl font-bold text-white mb-2">
							By hosting our services within the EU, we prioritize data sovereignty, ensuring
							compliance with regional laws while delivering robust and reliable analytics for your
							business. 🇪🇺
						</h4>
					</div>
				</div>
			</div>
		</div>
		<div class="container mx-auto mt-24">
			<div class="mx-auto text-gray-600 max-w-[65ch] text-lg">
				<h2 class="text-3xl font-extrabold text-gray-900 leading-7 mb-5">Why choose us?</h2>
				<h3 class="text-2xl font-semibold mb-2 text-gray-900">
					<span class="text-3xl font-extrabold text-[#007AFF]">1. </span> A Reliable Alternative to Google
					Analytics
				</h3>
				<p class="max-w-md md:mt-2 md:max-w-3xl text-lg leading-7 mb-7">
					In a landscape dominated by analytics giants, Hazelint emerges as a refreshing alternative
					to Google Analytics. While we appreciate the industry leader's prowess, our platform
					distinguishes itself by prioritizing user privacy without compromising on analytics
					precision. Our GDPR-compliant approach ensures that your data remains yours alone,
					offering a more secure environment for understanding user behavior. With an intuitive
					interface and a commitment to simplicity, Hazelint provides an alternative that empowers
					businesses with the insights they need, minus the complexities often associated with
					larger analytics solutions. Make the switch for a more privacy-focused, user-friendly, and
					effective analytics experience.
				</p>
				<h3 class="text-2xl font-semibold mb-2 text-gray-900">
					<span class="text-3xl font-extrabold text-[#007AFF]">2. </span> Privacy-First Analytics
				</h3>
				<p class="max-w-md md:mt-2 md:max-w-3xl text-lg leading-7 mb-7">
					At Hazelint, our commitment to privacy extends beyond mere compliance; it is ingrained in
					every aspect of our analytics platform. With servers and our company proudly based in
					Europe, we adhere rigorously to GDPR standards, ensuring that your data remains
					confidential and secure. Your peace of mind is our priority as we provide powerful
					insights while safeguarding your digital footprint.
				</p>
				<h3 class="text-2xl font-semibold mb-2 text-gray-900">
					<span class="text-3xl font-extrabold text-[#007AFF]">3. </span> Future-Driven Roadmap
				</h3>
				<p class="max-w-md md:mt-2 md:max-w-3xl text-lg leading-7 mb-7">
					Choosing Hazelint means not just adopting a cutting-edge analytics tool but joining a
					journey of continuous improvement. Our transparent roadmap lays out a trajectory for
					innovation, showcasing upcoming features and enhancements. We believe in empowering our
					users with the latest advancements, keeping you ahead of the curve in the dynamic
					landscape of web analytics.
				</p>
			</div>
		</div>
		<div class="container mt-24">
			<div class="flex flex-col">
				<div class=" flex justify-center">
					<h2 class="text-3xl font-extrabold text-gray-900 leading-9 mr-1 text-center inline-block">
						Roadmap
					</h2>
					<Icon class="inline-block" width="40" icon="noto:rocket" />
				</div>

				<p
					class="max-w-md mx-auto md:mt-5 md:max-w-3xl mt-4 text-lg text-gray-600 leading-7 mb-5 text-center"
				>
					Explore the Hazelint Analytics roadmap for a clear overview of upcoming features and
					enhancements for our product.
				</p>
			</div>
			<div class="max-w-[65ch] mx-auto text-lg">
				<h3 class="mt-10 text-3xl font-extrabold text-[#007AFF]">2024 Q1 & Q2</h3>
				<ul class="list-disc text-gray-600">
					<li class="text-lg leading-7">First internal test release.</li>
					<li class="text-lg leading-7">Updating the website with more confirmed features.</li>
					<li class="text-lg leading-7">Opening a newsletter on the website.</li>
				</ul>
				<h3 class="mt-10 text-3xl font-extrabold text-[#007AFF]">2024 Q3</h3>
				<ul class="list-disc text-gray-600">
					<li class="text-lg leading-7">Working towards v1.0.</li>
					<li class="text-lg leading-7">Updating the website with more confirmed features.</li>
				</ul>
				<h3 class="mt-10 text-3xl font-extrabold text-[#007AFF]">2024 Q4</h3>
				<ul class="list-disc text-gray-600">
					<li class="text-lg leading-7">Version 1.0 release.</li>
					<li class="text-lg leading-7">Maintaining servers and the new release.</li>
					<li class="text-lg leading-7">
						Updating the roadmap with exciting new features for 2025.
					</li>
				</ul>
			</div>
		</div>
	</main>
	<footer class="bg-gray-800">
		<div class="container py-12 px-4 sm:px-6 lg:py-16 lg:px-8 flex justify-center">
			<div
				class="grid grid-cols-2 grid-rows-2 sm:grid-rows-1 gap-5 md:gap-10 content-center
			"
			>
				<div class="col-span-2 sm:col-span-1 row-span-1">
					<div>
						<h4 class="font-bold leading-5 tracking-wider text-gray-300 text-lg">
							<img src="/logo.svg" alt="Hazelint Logo" class="inline-block h-8 mr-1" /> Hazelint Analytics
						</h4>
						<p class="mt-4 text-gray-400 text-base leading-6">
							Made and hosted in the EU <span class="text-lg">🇪🇺</span>
						</p>
					</div>
				</div>
				<div class="col-span-2 sm:col-span-1 row-span-1">
					<h4 class="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
						Socials
					</h4>
					<ul class="footer mt-4">
						<li>
							<a
								class="text-base leading-6 text-gray-300 hover:text-white"
								href="https://twitter.com/hazelint"
								>X <span class="text-[#007AFF]">(</span>Twitter<span class="text-[#007AFF]">)</span
								></a
							>
						</li>
						<li class="mt-4">
							<a
								class="text-base leading-6 text-gray-300 hover:text-white"
								href="https://github.com/Hazelint"
								target="_blank">Github</a
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
</div>

<style>
	.container {
		width: 100%;
		margin-right: auto;
		margin-left: auto;
		padding-right: 10px;
		padding-left: 10px;
	}
	.custom-radiant-purple {
		background: radial-gradient(ellipse at 5% 5%, #970dc9 0%, rgba(123, 207, 106, 0) 85%),
			radial-gradient(ellipse at 95% 5%, #007aff 0%, rgba(174, 193, 84, 0) 85%),
			radial-gradient(ellipse at 95% 95%, #007aff 0%, rgba(104, 169, 187, 0) 85%),
			radial-gradient(ellipse at 5% 95%, #970dc9 0%, rgba(95, 194, 138, 0) 85%);
	}
	.custom-radiant-yellow {
		background: radial-gradient(ellipse at 5% 5%, #b8ce66 0%, rgba(123, 207, 106, 0) 100%),
			radial-gradient(ellipse at 95% 5%, #007aff 0%, rgba(174, 193, 84, 0) 95%),
			radial-gradient(ellipse at 95% 95%, #007aff 0%, rgba(104, 169, 187, 0) 95%),
			radial-gradient(ellipse at 5% 95%, #61a87b 0%, rgba(95, 194, 138, 0) 100%);
	}
	ul .footer {
		list-style: none;
		margin: 0;
		padding: 0;
	}
</style>
