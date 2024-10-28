<script>
  import Loginfrom from "../loginFrom/loginfrom.svelte";

  // Dynamic data and props
  export let headerTitle = "AMJAD";
  export let dashboardLabel = "DASHBOARD";
  export let navigationLinks = [
    { label: "Dashboard", icon: "M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z", href: "#" },
    { label: "Activity", icon: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z", href: "#" },
    { label: "Library", icon: "M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z", href: "#" },
    { label: "Schedules", icon: "M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z", href: "#" },
    { label: "Payouts", icon: "M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z", href: "#" },
    { label: "Settings", icon: "M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z", href: "#" },
  ];
  export let logoutLabel = "Log Out";
  export let Card = [
    {
      image: "https://www.gemoo-resource.com/images/post-different-size-photos-on-instagram-0.png",
      name: "Null Theater Improver",
      date: "THU, OCT 24 2024, 11:00 AM",
      sender: "Start from",
      price: "$34.00",
      stock: "Only 2 left!",
    },
    // Add other cards as needed
  ];

  export let stats = [
    { title: "Spent this month", value: "$682.5", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { title: "Revenue this month", value: "$1,200.75", icon: "M9 14l2-2m0 0l2 2m-2-2v6m5-6l2-2m0 0l2 2m-2-2V8m-5 2V3m-2 0V8m-2 2h2v5m0 0V8h2" },
    { title: "Active users", value: "3,540", icon: "M12 12c2.121 0 3.764-1.641 4-3.6V8c0-.941-2.872-2.6-4-2.6S8 7.059 8 8v.4c.236 1.959 1.879 3.6 4 3.6z" },
  ];

  let searchQuery = "";
  export let signupQuery = "Sign In";

  
  let showLoginForm = false;

  
  function toggleLoginForm() {
    showLoginForm = !showLoginForm;
  }
</script>

<div class="flex h-screen bg-gray-100">
  <aside class="w-64 bg-white shadow-md">
    <div class="p-4">
      <h1 class="text-2xl font-bold text-purple-600">{headerTitle}</h1>
      <p class="text-sm text-gray-500">{dashboardLabel}</p>
    </div>
    <nav class="mt-6">
      {#each navigationLinks as link}
        <a href={link.href} class="block py-2 px-4 text-gray-600 hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" class="inline-block mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d={link.icon} />
          </svg>
          {link.label}
        </a>
      {/each}
    </nav>
    <div class="absolute bottom-0 w-64 p-4">
      <a href="#" class="block py-2 px-4 text-gray-600 hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" class="inline-block mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd" />
        </svg>
        {logoutLabel}
      </a>
    </div>
  </aside>

  <main class="flex-1 overflow-y-auto">
    <header class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div class="w-1/3">
          <input type="text" placeholder="Search" bind:value={searchQuery} class="w-full pl-10 pr-4 py-2 rounded-full border focus:outline-none focus:border-purple-500" />
        </div>
        <div>
          <button on:click={toggleLoginForm} class="text-blue-500 font-medium">
            {signupQuery}
          </button>
        </div>
      </div>
    </header>
    <div class="max-w-fullxl mx-auto py-6 px-16">
      <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 mb-5">
        {#each stats as stat}
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="p-5">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={stat.icon} />
                  </svg>
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 truncate">{stat.title}</dt>
                    <dd class="text-2xl font-semibold text-gray-900">{stat.value}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>

    
    {#if showLoginForm}
      <div class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
        <Loginfrom />
      </div>
    {/if}

    <div class="flex flex-row flex-wrap justify-center gap-x-16 gap-y-6 mt-8">
      {#each Card as card}
        <div class="w-1/5 border flex flex-col border-gray-900 rounded-2xl mb-4">
          <div class="w-full bg-blue-950 rounded-t-2xl">
            <img src={card.image} class="h-[200px] w-full object-contain" />
          </div>
          <p class="text-[20px] font-medium text-gray-800 mt-2 leading-1 pl-6">{card.name}</p>
          <p class="text-[20px] font-medium pt-10 pl-6 leading-1 text-gray-800">{card.date}</p>
          <p class="pl-6 text-sm text-gray-500 pt-2">{card.sender}</p>
          <div class="flex flex-row mt-auto pl-6 pb-6 gap-20">
            <span class="text-2xl py-1.5 font-bold">{card.price}</span>
            <span class="text-xl font-semibold bg-gray-200 text-red-600 items-center rounded-lg px-4 py-1">{card.stock}</span>
          </div>
        </div>
      {/each}
    </div>
  </main>
</div>
