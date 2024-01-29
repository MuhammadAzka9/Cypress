/// <reference types="cypress" />

describe("Pengujian DemoQA", () => {
    it("Membuka halaman utama DemoQA", () => {
      cy.visit("https://demoqa.com/");
    });
  
    it("Mengakses menu Elements dan memeriksa submenu", () => {
      cy.visit("https://demoqa.com/");
      
      // Klik menu "Elements"
      cy.contains("Elements").click();
      
      // Periksa submenu
      cy.contains("Text Box").should("be.visible");
      cy.contains("Check Box").should("be.visible");
      cy.contains("Radio Button").should("be.visible");
      cy.contains("Web Tables").should("be.visible");
      cy.contains("Buttons").should("be.visible");
    });
  
    it("Menguji submenu Text Box", () => {
      cy.visit("https://demoqa.com/");
      
      // Klik menu "Elements"
      cy.contains("Elements").click();
      
      // Klik submenu "Text Box"
      cy.contains("Text Box").click();
      
      // Periksa halaman "Text Box"
      cy.url().should("include", "text-box");
      cy.contains("Text Box").should("be.visible");
    });
  });
  