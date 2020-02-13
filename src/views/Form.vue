<template>
  <div class="w-full max-w-xs m-auto">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name"
          >Name</label
        >
        <input
          v-model="startup.name"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          id="name"
          type="text"
          placeholder="Name"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="sponsor"
          >Sponsor</label
        >
        <input
          v-model="startup.sponsor"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          id="sponsor"
          type="text"
          placeholder="Sponsor"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="seedFund"
          >SeedFund</label
        >
        <input
          v-model="startup.seedFund"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          id="seedFund"
          type="number"
          placeholder="$"
        />
      </div>
      <div class="flex items-center justify-center">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none"
          type="button"
        >
          Submit Data
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      startup: {
        name: "",
        sponsor: "",
        seedFund: ""
      }
    };
  },
  methods: {
    //   addData() {
    //     const formatter = new Intl.NumberFormat("en-US", {
    //       style: "currency",
    //       currency: "USD"
    //     });
    //     const formattedseedFund = formatter.format(this.startup.seedFund);
    //     const newData = { ...this.startup, seedFund: formattedseedFund };
    //     addData(newData)
    //       .then(res => {
    //         console.log(res);
    //       })
    //       .then(() => {
    //         this.startup.name = "";
    //         this.startup.sponsor = "";
    //         this.startup.seedFund = "";
    //       })
    //       .catch(error => {
    //         console.error(error);
    //       });
    //   }
  }
};
</script>
