<script>
    import { onMount } from 'svelte';
    import { Line, Bar } from 'svelte-chartjs';
    import { 
      Chart as ChartJS,
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      BarElement,
      Title,
      Tooltip,
      Legend
    } from 'chart.js';
  
    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      BarElement,
      Title,
      Tooltip,
      Legend
    );
  
    const monthlyData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        data: [400, 300, 200, 278, 189, 239, 349, 430, 291, 500, 200, 350],
        borderColor: '#8884d8',
        tension: 0.1
      }]
    };
  
    const balanceData = {
      labels: ['1', '2', '3', '4', '5', '6', '7'],
      datasets: [{
        data: [4000, 3000, 5000, 2780, 1890, 2390, 3490],
        borderColor: '#8884d8',
        tension: 0.1
      }]
    };
  
    const barChartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        data: [400, 300, 200, 278, 189, 239, 349, 430, 291, 500, 200, 350],
        backgroundColor: '#8884d8'
      }]
    };
  
    let searchQuery = '';
  </script>
  
  <div class="flex h-screen bg-gray-100">
  
    <aside class="w-64 bg-white shadow-md">
      <div class="p-4">
        <h1 class="text-2xl font-bold text-purple-600">VENUS</h1>
        <p class="text-sm text-gray-500">DASHBOARD</p>
      </div>
      <nav class="mt-6">
        <a href="#" class="block py-2 px-4 bg-purple-600 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="inline-block mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
          </svg>
          Dashboard
        </a>
        <a href="#" class="block py-2 px-4 text-gray-600 hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" class="inline-block mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
          </svg>
          Activity
        </a>
        <a href="#" class="block py-2 px-4 text-gray-600 hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" class="inline-block mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
          </svg>
          Library
        </a>
        <!-- Add more navigation items here -->
      </nav>
      <div class="absolute bottom-0 w-64 p-4">
        <a href="#" class="block py-2 px-4 text-gray-600 hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" class="inline-block mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd" />
          </svg>
          Log Out
        </a>
      </div>
    </aside>
  
    
    <main class="flex-1 overflow-y-auto">
      
      <header class="bg-white shadow-sm">
        <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div class="w-1/3">
            <div class="relative">
              <input type="text" placeholder="Search" bind:value={searchQuery} class="w-full pl-10 pr-4 py-2 rounded-full border focus:outline-none focus:border-purple-500" />
              <svg xmlns="http://www.w3.org/2000/svg" class="absolute left-3 top-2.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
          <div class="flex items-center">
            <button class="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
            </button>
            <img src="https://avatars.githubusercontent.com/u/159441246?v=4" alt="User" class="w-8 h-8 rounded-full ml-4" />
          </div>
        </div>
      </header>
  
      <!-- Dashboard Content -->
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- Stats Grid -->
        <div class="grid grid-cols-1 gap-5 sm:grid-cols-4 mb-5">
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="p-5">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 truncate">Spent this month</dt>
                    <dd class="flex items-baseline">
                      <div class="text-2xl font-semibold text-gray-900">$682.5</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-5 py-3">
              <div class="text-sm h-12">
                <Line data={monthlyData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }} />
              </div>
            </div>
          </div>
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="p-5">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 truncate">New Clients</dt>
                    <dd class="flex items-baseline">
                      <div class="text-2xl font-semibold text-gray-900">321</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-5 py-3">
              <div class="text-sm h-12">
                <Line data={monthlyData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }} />
              </div>
            </div>
          </div>
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="p-5">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 truncate">Earnings</dt>
                    <dd class="flex items-baseline">
                      <div class="text-2xl font-semibold text-gray-900">$350.40</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-5 py-3">
              <div class="text-sm h-12">
                <Bar data={monthlyData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }} />
              </div>
            </div>
          </div>
          <div class="bg-purple-600 overflow-hidden shadow rounded-lg">
            <div class="p-5">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none"   viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt class="text-sm font-medium text-purple-100 truncate">Activity</dt>
                    <dd class="flex items-baseline">
                      <div class="text-2xl font-semibold text-white">$540.50</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div class="bg-purple-700 px-5 py-3">
              <div class="text-sm h-12">
                <Line data={monthlyData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }} />
              </div>
            </div>
          </div>
        </div>
  
        <!-- Charts -->
        <div class="bg-white shadow rounded-lg mb-5">
          <div class="p-5">
            <h3 class="text-lg leading-6 font-medium text-gray-900">Total Spent</h3>
            <div class="mt-2">
              <p class="text-3xl font-semibold text-gray-900">$682.5</p>
            </div>
          </div>
          <div class="bg-gray-50 px-5 py-3">
            <div class="h-64">
              <Bar data={barChartData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>
        </div>
  
        <!-- User Profile and Balance -->
        <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div class="bg-white shadow rounded-lg p-5">
            <div class="flex items-center">
              <img src="/placeholder.svg?height=64&width=64" alt="User" class="w-16 h-16 rounded-full" />
              <div class="ml-5">
                <h3 class="text-lg font-semibold text-gray-900">Charles Robbie</h3>
                <p class="text-sm text-gray-500">New York, USA</p>
                <div class="mt-2 flex space-x-4">
                  <div>
                    <p class="text-sm font-medium text-gray-500">Projects</p>
                    <p class="text-lg font-semibold text-gray-900">28</p>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-gray-500">Followers</p>
                    <p class="text-lg font-semibold text-gray-900">643</p>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-gray-500">Following</p>
                    <p class="text-lg font-semibold text-gray-900">76</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white shadow rounded-lg p-5">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-lg font-semibold text-gray-900">Balance</h3>
              <span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">On track</span>
            </div>
            <div class="h-48">
              <Line data={balanceData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }} />
            </div>
            <div class="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p class="text-sm font-medium text-gray-500">Saves</p>
                <p class="text-lg font-semibold text-gray-900">43.50%</p>
                <span class="text-sm text-green-600">+2.45%</span>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-500">Balance</p>
                <p class="text-lg font-semibold text-gray-900">$52,422</p>
                <span class="text-sm text-red-600">-4.75%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>