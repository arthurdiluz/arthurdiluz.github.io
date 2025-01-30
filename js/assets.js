window.addEventListener("load", (_) => {
  const infoElement = document.querySelector("#shortInfo");
  const divInfo = document.createElement("div");
  const resumeElement = document.createElement("a");
  const curriculumElement = document.createElement("a");
  const separatorElement = document.createTextNode(" | ");
  const age = String(moment().diff("1999-07-30", "years"));

  resumeElement.href = "../static/resume.pdf";
  resumeElement.target = "_blank";
  resumeElement.text = "🇺🇸 read resume";

  curriculumElement.href = "../static/curriculo.pdf";
  curriculumElement.target = "_blank";
  curriculumElement.text = "🇧🇷 ler currículo";

  divInfo.textContent = `${age} years old · campinas, são paulo, brasil`;
  infoElement.appendChild(divInfo);
  infoElement.appendChild(resumeElement);
  infoElement.appendChild(separatorElement);
  infoElement.appendChild(curriculumElement);
});
