<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="header in headers" :key="header">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in data" :key="row.id">
          <td v-for="header in headers" :key="header">{{ row[header] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import * as XLSX from "xlsx";

export default {
  data() {
    return {
      data: [],
      headers: [],
    };
  },
  mounted() {
    // Load the specific file
    const filePath =
      "/home/marwan/Desktop/matrex/Design-standards/design-standards/src/assets/version1.xlsx";
    this.readFile(filePath);
  },
  methods: {
    readFile(filePath) {
      // Use a fetch-like method to get the file data
      fetch(filePath)
        .then((response) => response.arrayBuffer())
        .then((data) => {
          const workbook = XLSX.read(data, { type: "array" });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const json = XLSX.utils.sheet_to_json(worksheet);
          this.data = json;
          this.headers = Object.keys(json[0] || {});
        })
        .catch((error) => {
          console.error("Error reading the file:", error);
        });
    },
    mounted() {
      // Load the file from the local server
      const filePath = "http://localhost:8080/version1.xlsx";
      this.readFile(filePath);
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid black;
  /* padding: 8px; */
  text-align: left;
}

th {
  background-color: #f2f2f2;
}
</style>
