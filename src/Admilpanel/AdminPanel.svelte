<script>
  let searchQuery = "";

  const Card = [
    {
      image: "https://www.gemoo-resource.com/images/post-different-size-photos-on-instagram-0.png",
      Name: "NUll threater Impover ",
      Date: "THU, OCT 24 2024, 11:00 AM",
      Sender: "Start from",
      Price: "$34.00",
      Stock: "Only 2 left!"
    },
    {
      image: "https://images.unsplash.com/photo-1580894899378-92e56886cd4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjAyNzZ8MHwxfHNlYXJjaHwyNHx8Y29kaW5nfGVufDB8fHx8MTcyODk0OTc3NHww&ixlib=rb-4.0.3&q=80&w=1080",
      Name: "NUll threater Impover",
      Date: "THU, OCT 24 2024, 11:00 AM",
      Sender: "Start from",
      Price: "$34.00",
      Stock: "Only 2 left!"
    },
    {
      image: "https://www.gemoo-resource.com/images/post-different-size-photos-on-instagram-0.png",
      Name: "NUll threater Impover",
      Date: "THU, OCT 24 2024, 11:00 AM",
      Sender: "Start from",
      Price: "$34.00",
      Stock: "Only 2 left!"
    },
    {
      image: "https://images.unsplash.com/photo-1597264102914-01be2a7f57a3?q=80&w=3032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Name: "NUll threater Impover",
      Date: "THU, OCT 24 2024, 11:00 AM",
      Sender: "Start from",
      Price: "$34.00",
      Stock: "Only 2 left!"
    }
  ];
</script>
<div class="flex h-screen bg-gray-100">
  <aside class="w-64 bg-white shadow-md">
    <div class="p-4">
      <h1 class="text-2xl font-bold text-purple-600">AMJAD</h1>
      <p class="text-sm text-gray-500">DASHBOARD</p>
    </div>
    <nav class="mt-6">
      <a href="#" class="block py-2 px-4 bg-purple-600 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="inline-block mr-2 h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
        </svg>
        Dashboard
      </a>
      <a href="#" class="block py-2 px-4 text-gray-600 hover:bg-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="inline-block mr-2 h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          />
        </svg>
        Activity
      </a>
      <a href="#" class="block py-2 px-4 text-gray-600 hover:bg-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="inline-block mr-2 h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
          />
        </svg>
        Library
      </a>
      <a href="#" class="block py-2 px-4 text-gray-600 hover:bg-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="inline-block mr-2 h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
          />
        </svg>
        Schedules
      </a>
      <a href="#" class="block py-2 px-4 text-gray-600 hover:bg-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="inline-block mr-2 h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
          />
        </svg>
        Payouts
      </a>
      <a href="#" class="block py-2 px-4 text-gray-600 hover:bg-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="inline-block mr-2 h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
          />
        </svg>
        Setting
      </a>
    </nav>
    <div class="absolute bottom-0 w-64 p-4">
      <a href="#" class="block py-2 px-4 text-gray-600 hover:bg-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="inline-block mr-2 h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
            clip-rule="evenodd"
          />
        </svg>
        Log Out
      </a>
    </div>
  </aside>

  <main class="flex-1 overflow-y-auto">
    <header class="bg-white shadow-sm">
      <div
        class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center"
      >
        <div class="w-1/3">
          <div class="relative">
            <input
              type="text"
              placeholder="Search"
              bind:value={searchQuery}
              class="w-full pl-10 pr-4 py-2 rounded-full border focus:outline-none focus:border-purple-500"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div class="flex items-center">
          <button
            class="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
              />
            </svg>
          </button>
          <img
            src="https://avatars.githubusercontent.com/u/159441246?v=4"
            alt="User"
            class="w-8 h-8 rounded-full ml-4"
          />
        </div>
      </div>
    </header>

    <div class="flex flex-row flex-wrap justify-center gap-x-4 gap-y-6 mt-8">
      {#each Card as card}
        <div class="w-1/5 border flex flex-col border-gray-900 rounded-2xl mb-4">
          <div class="w-full bg-blue-950 rounded-t-2xl">
            <img src={card.image} class="h-[200px] w-full object-contain" />
          </div>
          <p class="text-[20px] font-medium text-gray-800 mt-2 leading-1 pl-6">
            {card.Name}
          </p>
          <p class="text-[20px] font-medium pt-10 pl-6 leading-1 text-gray-800">
            {card.Date}
          </p>
          <p class="pl-6 text-sm text-gray-500 pt-2">{card.Sender}</p>
          <div class="flex flex-row mt-auto pl-6  pb-6 gap-20">
            <span class="text-2xl py-1.5 font-bold">{card.Price}</span>
            <span
              class="text-xl font-semibold bg-gray-200 text-red-600 items-center rounded-lg px-4 py-1"
            >
              {card.Stock}
            </span>
          </div>
        </div>
      {/each}
    </div>

  
  </main>
</div>
