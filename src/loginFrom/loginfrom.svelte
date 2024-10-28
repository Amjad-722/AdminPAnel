```svelte
<script>
  export let formTitle = "Sign In";
  export let nameLabel = "Name";
  export let emailLabel = "Email";
  export let passwordLabel = "Password";
  export let signInLabel = "Sign In";
  export let cancelLabel = "Cancel";
 
</script>

<div class="absolute z-0 right-20 top-16 mt-2 w-64 bg-white rounded-2xl shadow-lg shadow-gray-800 overflow-hidden">
  <form class="px-4 py-3">
    <div class="mb-4">
      <label for="name" class="block text-gray-700 text-sm font-bold mb-2">{nameLabel}</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div class="mb-4">
      <label for="email" class="block text-gray-700 text-sm font-bold mb-2">{emailLabel}</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div class="mb-4">
      <label for="password" class="block text-gray-700 text-sm font-bold mb-2">{passwordLabel}</label>
      <input
        type="password"
        id="password"
        name="password"
        required
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div class="flex items-center justify-between">
      <button  
        type="submit"
        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
      >
        {signInLabel}
      </button>
      <button
        type="button"
        class="text-sm text-gray-500 hover:text-gray-700 transition duration-300"
      >
        {cancelLabel}
      </button>
    </div>
  </form>
</div>
