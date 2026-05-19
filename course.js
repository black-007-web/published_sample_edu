
const courses = [
  //CSE COURSES :

{ code: "AA099", department: "General", title: "Academic Reading & Writing", credit: "3", prerequisite: "None" },
{ code: "AA150", department: "General", title: "Fundamentals of Quantitative Reasoning", credit: "3", prerequisite: "None" },
{ code: "AA200", department: "General", title: "Student Development Seminar", credit: "3", prerequisite: "None" },
{ code: "ENG111", department: "General", title: "Advanced Academic Reading & Writing", credit: "3", prerequisite: "AA099" },
{ code: "ENG112", department: "General", title: "Advanced Academic Listening & Speaking", credit: "1.5", prerequisite: "None" },
{ code: "BNG101", department: "General", title: "Bangla Language and Literature", credit: "3", prerequisite: "None" },
{ code: "HIS101", department: "General", title: "History of the Emergence of Bangladesh", credit: "3", prerequisite: "None" },
{ code: "PSC100", department: "General", title: "Introduction to Political Science", credit: "3", prerequisite: "None" },
{ code: "IGLE300", department: "General", title: "International Graduate Leadership Experience", credit: "3", prerequisite: "None" },
{ code: "SOC101", department: "General", title: "Introduction to Sociology", credit: "3", prerequisite: "None" },
{ code: "JRN101", department: "General", title: "Mass Communication in Contemporary Society", credit: "3", prerequisite: "None" },
{ code: "BCH101", department: "General", title: "Bangladesh Culture and Heritage", credit: "3", prerequisite: "None" },
{ code: "BPH101", department: "General", title: "Bangladesh Political History", credit: "3", prerequisite: "None" },
{ code: "PSY101", department: "General", title: "Principles of Psychology", credit: "3", prerequisite: "None" },
{ code: "ANT101", department: "General", title: "Physical Anthropology", credit: "3", prerequisite: "None" },
{ code: "FRN101", department: "General", title: "Elementary French I", credit: "3", prerequisite: "None" },
{ code: "SDA101", department: "General", title: "Public Speaking", credit: "3", prerequisite: "None" },
{ code: "PHI102", department: "General", title: "Moral Problems", credit: "3", prerequisite: "None" },
{ code: "PSC150", department: "General", title: "World Politics", credit: "3", prerequisite: "None" },
{ code: "ECO203", department: "General", title: "Bangladesh Economy", credit: "3", prerequisite: "None" },
{ code: "ENG300", department: "General", title: "Critical Reading and Writing Skills", credit: "3", prerequisite: "None" },
{ code: "IGS101", department: "General", title: "Introduction to Gender and Women's Studies", credit: "3", prerequisite: "None" },
{ code: "IIR101", department: "General", title: "Introduction to International Relations Theory", credit: "3", prerequisite: "None" },
{ code: "WPP101", department: "General", title: "Western Political Philosophy", credit: "3", prerequisite: "None" },
{ code: "BUS300", department: "General", title: "Business Communication", credit: "3", prerequisite: "None" },
{ code: "HUM105", department: "General", title: "Bangladesh Studies", credit: "3", prerequisite: "None" },
{ code: "HUM107", department: "General", title: "Industrial Management and Law", credit: "3", prerequisite: "None" },
{ code: "HUM201", department: "General", title: "Macro & Microeconomics", credit: "3", prerequisite: "None" },
{ code: "HUM203", department: "General", title: "Communication Skills for Engineers", credit: "3", prerequisite: "None" },
{ code: "HUM211", department: "General", title: "Entrepreneurship for Engineers", credit: "3", prerequisite: "None" },
{ code: "HUM301", department: "General", title: "Financial & Managerial Accounting", credit: "3", prerequisite: "None" },
{ code: "HUM303", department: "General", title: "Sociology & Ethics", credit: "3", prerequisite: "None" },
{ code: "HUM305", department: "General", title: "Professional Ethics & Environmental Protection", credit: "3", prerequisite: "None" },
{ code: "IPD400", department: "General", title: "Integrated Professional Development", credit: "3", prerequisite: "None" },
{ code: "PHY101", department: "General", title: "Physics", credit: "3", prerequisite: "None" },
{ code: "PHY102", department: "General", title: "Physics Laboratory", credit: "1.5", prerequisite: "None" },
{ code: "CHEM201", department: "General", title: "Chemistry", credit: "3", prerequisite: "None" },
{ code: "MATH107", department: "CSE", title: "Differential Calculus, Co-ordinate Geometry & Complex Variables", credit: "3", prerequisite: "AA150" },
{ code: "MATH207", department: "CSE", title: "Integral Calculus, Vector Analysis & Linear Algebra", credit: "3", prerequisite: "MATH107" },
{ code: "MATH205", department: "CSE", title: "Numerical Analysis", credit: "3", prerequisite: "MATH107" },
{ code: "MATH203", department: "CSE", title: "Fourier Analysis, Laplace Transform & Differential Equations", credit: "3", prerequisite: "MATH107" },
{ code: "MATH301", department: "CSE", title: "Probability & Statistics", credit: "3", prerequisite: "MATH107" },
{ code: "ME102", department: "CSE", title: "Engineering Drawing", credit: "1.5", prerequisite: "None" },
{ code: "EEE111", department: "CSE", title: "Introduction to Electrical Engineering", credit: "3", prerequisite: "None" },
{ code: "EEE112", department: "CSE", title: "Introduction to Electrical Engineering Laboratory", credit: "1.5", prerequisite: "None" },
{ code: "CSE111", department: "CSE", title: "Computer Fundamentals and Programming Basics", credit: "3", prerequisite: "None" },
{ code: "CSE112", department: "CSE", title: "Computer Fundamentals and Programming Basics Laboratory", credit: "1.5", prerequisite: "None" },
{ code: "CSE113", department: "CSE", title: "Structured Programming Language", credit: "3", prerequisite: "CSE111" },
{ code: "CSE114", department: "CSE", title: "Structured Programming Language Laboratory", credit: "1.5", prerequisite: "None" },
{ code: "CSE115", department: "CSE", title: "Discrete Mathematics", credit: "3", prerequisite: "CSE113" },
{ code: "CSE123", department: "CSE", title: "Object Oriented Programming Language", credit: "3", prerequisite: "CSE113" },
{ code: "CSE124", department: "CSE", title: "Object Oriented Programming Language Laboratory", credit: "1.5", prerequisite: "None" },
{ code: "CSE211", department: "CSE", title: "Data Structure", credit: "3", prerequisite: "CSE113" },
{ code: "CSE212", department: "CSE", title: "Data Structure Laboratory", credit: "1.5", prerequisite: "None" },
{ code: "CSE215", department: "CSE", title: "Digital Logic Design", credit: "4", prerequisite: "None" },
{ code: "CSE216", department: "CSE", title: "Digital Logic Design Laboratory", credit: "1.5", prerequisite: "None" },
{ code: "CSE221", department: "CSE", title: "Algorithms", credit: "3", prerequisite: "CSE211, CSE123" },
{ code: "CSE222", department: "CSE", title: "Algorithms Laboratory", credit: "1.5", prerequisite: "None" },
{ code: "CSE223", department: "CSE", title: "Digital Electronics & Pulse Technique", credit: "3", prerequisite: "CSE215" },
{ code: "CSE224", department: "CSE", title: "Digital Electronics & Pulse Technique Laboratory", credit: "1.5", prerequisite: "None" },
{ code: "CSE225", department: "CSE", title: "Database Management System", credit: "3", prerequisite: "CSE123" },
{ code: "CSE226", department: "CSE", title: "Database Management System Laboratory", credit: "1.5", prerequisite: "None" },
{ code: "CSE242", department: "CSE", title: "Web Development", credit: "1.5", prerequisite: "CSE225" },
{ code: "CSE311", department: "CSE", title: "Operating System", credit: "3", prerequisite: "CSE123" },
{ code: "CSE312", department: "CSE", title: "Operating System Laboratory", credit: "1.5", prerequisite: "None" },
{ code: "CSE313", department: "CSE", title: "Data Communication", credit: "3", prerequisite: "None" },
{ code: "CSE315", department: "CSE", title: "Microprocessor and Interfacing", credit: "3", prerequisite: "CSE215, CSE113" },
{ code: "CSE316", department: "CSE", title: "Microprocessor and Interfacing Laboratory", credit: "1.5", prerequisite: "None" },
{ code: "CSE317", department: "CSE", title: "Computer Organization and Architecture", credit: "3", prerequisite: "CSE211, CSE123" },
{ code: "CSE319", department: "CSE", title: "Compiler Design", credit: "3", prerequisite: "CSE123, CSE115, CSE211" },
{ code: "CSE320", department: "CSE", title: "Compiler Design Lab", credit: "1.5", prerequisite: "None" },
{ code: "CSE321", department: "CSE", title: "Computer Graphics", credit: "3", prerequisite: "CSE221" },
{ code: "CSE322", department: "CSE", title: "Computer Graphics Lab", credit: "1.5", prerequisite: "None" },
{ code: "CSE325", department: "CSE", title: "Computer Networks", credit: "3", prerequisite: "CSE313" },
{ code: "CSE326", department: "CSE", title: "Computer Networks Laboratory", credit: "1.5", prerequisite: "None" },
{ code: "CSE327", department: "CSE", title: "Artificial Intelligence", credit: "3", prerequisite: "CSE115, CSE221, CSE315" },
{ code: "CSE328", department: "CSE", title: "Artificial Intelligence Lab", credit: "1.5", prerequisite: "None" },
{ code: "CSE342", department: "CSE", title: "IoT based Project Development", credit: "1.5", prerequisite: "CSE315" },
{ code: "CSE301", department: "CSE", title: "Data Warehousing and Mining", credit: "3", prerequisite: "CSE325, CSE311, CSE225" },
{ code: "CSE303", department: "CSE", title: "Introduction to Bioinformatics", credit: "3", prerequisite: "None" },
{ code: "CSE307", department: "CSE", title: "Mobile Computing and Applications", credit: "3", prerequisite: "None" },
{ code: "CSE308", department: "CSE", title: "Mobile Computing and Applications Lab", credit: "1.5", prerequisite: "None" },
{ code: "CSE309", department: "CSE", title: "Distributed Systems", credit: "3", prerequisite: "None" },
{ code: "CSE337", department: "CSE", title: "Multimedia Theory", credit: "3", prerequisite: "None" },
{ code: "CSE400", department: "CSE", title: "Project / Thesis", credit: "6", prerequisite: "None" },
{ code: "CSE411", department: "CSE", title: "Software Engineering", credit: "3", prerequisite: "CSE123, CSE211" },
{ code: "CSE429", department: "CSE", title: "Software Project Management", credit: "3", prerequisite: "CSE225, CSE221" },
{ code: "CSE435", department: "CSE", title: "Pattern Recognition", credit: "3", prerequisite: "None" },
{ code: "CSE436", department: "CSE", title: "Pattern Recognition Lab", credit: "1.5", prerequisite: "None" },
{ code: "CSE439", department: "CSE", title: "Digital Image Processing", credit: "3", prerequisite: "CSE321" },
{ code: "CSE440", department: "CSE", title: "Digital Image Processing Lab", credit: "1.5", prerequisite: "None" },
{ code: "CSE443", department: "CSE", title: "Neural Network and Fuzzy Systems", credit: "3", prerequisite: "CSE327" },
{ code: "CSE447", department: "CSE", title: "Robotics", credit: "3", prerequisite: "None" },
{ code: "CSE455", department: "CSE", title: "Business Process Reengineering", credit: "3", prerequisite: "CSE225, CSE327" },
{ code: "CSE457", department: "CSE", title: "Cyber Security", credit: "3", prerequisite: "CSE325" },
{ code: "CSE459", department: "CSE", title: "Network Security", credit: "3", prerequisite: "CSE325" },
{ code: "CSE463", department: "CSE", title: "Machine Learning for Big Data Analytics", credit: "3", prerequisite: "CSE225, CSE327" },
{ code: "CSE466", department: "CSE", title: "Python based Project Development", credit: "1.5", prerequisite: "CSE327, CSE445" },
{ code: "CSE464", department: "CSE", title: "Mobile App Development", credit: "1.5", prerequisite: "CSE227" },
{ code: "ETE309", department: "CSE", title: "Digital Signal Processing", credit: "3", prerequisite: "CSE313" },
{ code: "ETE310", department: "CSE", title: "Digital Signal Processing Laboratory", credit: "1.5", prerequisite: "CSE313" },
{ code: "ETE431", department: "CSE", title: "Mobile Cellular & Wireless Communication", credit: "3", prerequisite: "None" },
{ code: "ETE435", department: "CSE", title: "Digital Communication", credit: "3", prerequisite: "CSE313" },
{ code: "ETE436", department: "CSE", title: "Digital Communication Laboratory", credit: "1.5", prerequisite: "CSE313" },
{ code: "EEE213", department: "CSE", title: "Electronics Devices & Circuits", credit: "3", prerequisite: "EEE111" },
{ code: "EEE214", department: "CSE", title: "Electronics Devices & Circuits Lab", credit: "1.5", prerequisite: "None" },
{ code: "EEE317", department: "CSE", title: "Electrical Drives & Instrumentation", credit: "3", prerequisite: "CSE215, EEE213" },
{ code: "EEE318", department: "CSE", title: "Electrical Drives & Instrumentation Lab", credit: "1.5", prerequisite: "None" },

  //EEE Courses :

{ code: "CSE103", department: "EEE", title: "Computer Programming", credit: "3", prerequisite: "None" },
{ code: "CSE104", department: "EEE", title: "Computer Programming Laboratory", credit: "1.5", prerequisite: "None" },
{ code: "ME101", department: "EEE", title: "Basic Mechanical Engineering", credit: "3", prerequisite: "None" },
{ code: "CE101", department: "EEE", title: "Engineering Drawing & Electrical Service Design", credit: "1.5", prerequisite: "None" },

{ code: "EEE101", department: "EEE", title: "Electrical Circuits-I", credit: "3", prerequisite: "None" },
{ code: "EEE102", department: "EEE", title: "Electrical Circuits-I Laboratory", credit: "1.5", prerequisite: "None" },
{ code: "EEE103", department: "EEE", title: "Electrical Circuits-II", credit: "3", prerequisite: "EEE101" },
{ code: "EEE104", department: "EEE", title: "Electrical Circuits-II Laboratory", credit: "1.5", prerequisite: "EEE102" },

{ code: "EEE203", department: "EEE", title: "Electrical Machines-I", credit: "3", prerequisite: "EEE103" },
{ code: "EEE204", department: "EEE", title: "Electrical Machines-I Laboratory", credit: "1.5", prerequisite: "EEE104" },

{ code: "EEE205", department: "EEE", title: "Electronics-I", credit: "3", prerequisite: "EEE103" },
{ code: "EEE206", department: "EEE", title: "Electronics-I Laboratory", credit: "1.5", prerequisite: "EEE104" },

{ code: "EEE207", department: "EEE", title: "Electrical Machines-II", credit: "4", prerequisite: "EEE203" },
{ code: "EEE208", department: "EEE", title: "Electrical Machines-II Laboratory", credit: "1.5", prerequisite: "EEE204" },

{ code: "EEE217", department: "EEE", title: "Digital Electronics", credit: "4", prerequisite: "EEE205" },
{ code: "EEE218", department: "EEE", title: "Digital Electronics Laboratory", credit: "1.5", prerequisite: "EEE205" },

{ code: "EEE219", department: "EEE", title: "Electromagnetic Fields & Waves", credit: "4", prerequisite: "MATH103" },

{ code: "EEE300", department: "EEE", title: "Machine Design and Simulation Lab", credit: "1.5", prerequisite: "EEE203, EEE207" },

{ code: "EEE301", department: "EEE", title: "Electronics-II", credit: "3", prerequisite: "EEE205" },
{ code: "EEE302", department: "EEE", title: "Electronics-II Laboratory", credit: "1.5", prerequisite: "EEE205" },

{ code: "EEE303", department: "EEE", title: "Signal and Systems", credit: "3", prerequisite: "MATH209" },

{ code: "EEE306", department: "EEE", title: "Mathematical Methods in Engineering", credit: "1.5", prerequisite: "MATH209" },

{ code: "EEE307", department: "EEE", title: "Science of Materials", credit: "3", prerequisite: "CHEM201" },

{ code: "EEE309", department: "EEE", title: "Digital Signal Processing", credit: "3", prerequisite: "EEE303" },

{ code: "EEE310", department: "EEE", title: "Digital Signal Processing Laboratory", credit: "1.5", prerequisite: "EEE304, EEE306" },

{ code: "EEE311", department: "EEE", title: "Control Systems", credit: "3", prerequisite: "EEE303" },

{ code: "EEE312", department: "EEE", title: "Control Systems Laboratory", credit: "1.5", prerequisite: "EEE303" },

{ code: "EEE313", department: "EEE", title: "Microprocessors & Micro Controllers", credit: "3", prerequisite: "EEE309" },

{ code: "EEE314", department: "EEE", title: "Microprocessors & Micro Controllers Laboratory", credit: "1.5", prerequisite: "EEE310" },

{ code: "EEE317", department: "EEE", title: "Transmission & Distribution of Electrical Power", credit: "3", prerequisite: "EEE207" },

{ code: "EEE330", department: "EEE", title: "Project - (Embedded Programming)", credit: "1.5", prerequisite: "CSE104" },

{ code: "EEE401", department: "EEE", title: "Power Electronics", credit: "3", prerequisite: "EEE301" },

{ code: "EEE402", department: "EEE", title: "Power Electronics Laboratory", credit: "1.5", prerequisite: "EEE301" },

{ code: "EEE403", department: "EEE", title: "Instrumentation & Measurement", credit: "3", prerequisite: "EEE311" },

{ code: "EEE404", department: "EEE", title: "Instrumentation & Measurement Laboratory", credit: "1.5", prerequisite: "EEE312" },

{ code: "EEE405", department: "EEE", title: "Fundamental Communication Engineering", credit: "4", prerequisite: "EEE303" },

{ code: "EEE406", department: "EEE", title: "Fundamental Communication Engineering Laboratory", credit: "1.5", prerequisite: "EEE304" },

{ code: "EEE407", department: "EEE", title: "Semiconductor Devices", credit: "3", prerequisite: "EEE301" },

{ code: "EEE409", department: "EEE", title: "VLSI", credit: "3", prerequisite: "EEE217" },

{ code: "EEE410", department: "EEE", title: "VLSI Laboratory", credit: "1.5", prerequisite: "EEE218" },

{ code: "EEE411", department: "EEE", title: "Microwave Engineering", credit: "3", prerequisite: "EEE219" },

{ code: "EEE412", department: "EEE", title: "Microwave Engineering Laboratory", credit: "1.5", prerequisite: "EEE219" },

{ code: "EEE431", department: "EEE", title: "Cellular Mobile Communication", credit: "3", prerequisite: "EEE405" },

{ code: "EEE433", department: "EEE", title: "Optical Fiber Communication", credit: "3", prerequisite: "EEE405" },

{ code: "EEE435", department: "EEE", title: "Digital Communication", credit: "3", prerequisite: "EEE405" },

{ code: "EEE436", department: "EEE", title: "Digital Communication Laboratory", credit: "1.5", prerequisite: "EEE405" },

{ code: "EEE437", department: "EEE", title: "Wireless Communication", credit: "3", prerequisite: "EEE405" },

{ code: "EEE438", department: "EEE", title: "Wireless Communication Laboratory", credit: "1.5", prerequisite: "EEE405" },

{ code: "EEE439", department: "EEE", title: "Random Signal Processing", credit: "3", prerequisite: "EEE309" },

{ code: "EEE441", department: "EEE", title: "Telecommunication Engineering", credit: "3", prerequisite: "EEE405" },

{ code: "EEE443", department: "EEE", title: "Data Communication & Computer Networks", credit: "3", prerequisite: "EEE405" },

{ code: "EEE445", department: "EEE", title: "Biomedical Instrumentation", credit: "3", prerequisite: "EEE309" },

{ code: "EEE447", department: "EEE", title: "Telecommunication Switching", credit: "3", prerequisite: "EEE405" },

{ code: "EEE451", department: "EEE", title: "Power System Analysis", credit: "3", prerequisite: "EEE317" },

{ code: "EEE452", department: "EEE", title: "Power System Analysis Laboratory", credit: "1.5", prerequisite: "EEE317" },

{ code: "EEE453", department: "EEE", title: "Power System Protection and Control", credit: "3", prerequisite: "EEE317" },

{ code: "EEE454", department: "EEE", title: "Power System Protection and Control Laboratory", credit: "1.5", prerequisite: "EEE317" },

{ code: "EEE455", department: "EEE", title: "High Voltage Engineering", credit: "3", prerequisite: "EEE317" },

{ code: "EEE457", department: "EEE", title: "Power Station", credit: "3", prerequisite: "ME101, EEE317" },

{ code: "EEE459", department: "EEE", title: "Power System Reliability", credit: "3", prerequisite: "EEE453" },

{ code: "EEE461", department: "EEE", title: "Renewable Energy", credit: "3", prerequisite: "EEE317" },

{ code: "EEE462", department: "EEE", title: "Renewable Energy Laboratory", credit: "1.5", prerequisite: "EEE317" },

{ code: "EEE463", department: "EEE", title: "Solar Cells", credit: "3", prerequisite: "EEE307" },

{ code: "EEE465", department: "EEE", title: "Smart Grid", credit: "3", prerequisite: "EEE317" },

{ code: "EEE471", department: "EEE", title: "IC Fabrication", credit: "3", prerequisite: "EEE407" },

{ code: "EEE473", department: "EEE", title: "Analog Integrated Circuits", credit: "3", prerequisite: "EEE301" },

{ code: "EEE475", department: "EEE", title: "VHDL", credit: "3", prerequisite: "EEE409" },

{ code: "EEE476", department: "EEE", title: "VHDL Laboratory", credit: "1.5", prerequisite: "EEE409" },

{ code: "EEE477", department: "EEE", title: "Advanced VLSI Design", credit: "3", prerequisite: "EEE409" },

{ code: "EEE478", department: "EEE", title: "Advanced VLSI Design Laboratory", credit: "1.5", prerequisite: "EEE409" },

{ code: "EEE479", department: "EEE", title: "Advanced Solid State Device", credit: "3", prerequisite: "EEE407" },

{ code: "EEE481", department: "EEE", title: "Optoelectronics", credit: "3", prerequisite: "EEE407" },

{ code: "EEE483", department: "EEE", title: "Nanotechnology", credit: "3", prerequisite: "EEE307" },

{ code: "EEE485", department: "EEE", title: "Nano-Bio Technology", credit: "3", prerequisite: "EEE307" },

{ code: "EEE487", department: "EEE", title: "Microelectronics", credit: "3", prerequisite: "EEE307" },

{ code: "EEE491", department: "EEE", title: "Multimedia Communications", credit: "3", prerequisite: "EEE405" },

{ code: "EEE493", department: "EEE", title: "Internet of Things", credit: "3", prerequisite: "EEE405" },

{ code: "EEE495", department: "EEE", title: "Internet Security and Networking", credit: "3", prerequisite: "EEE405" },

{ code: "EEE400", department: "EEE", title: "Project / Thesis", credit: "6", prerequisite: "None" }


];

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const liveResults = document.getElementById("liveResults");

const modalOverlay = document.getElementById("modalOverlay");

const modalDepartment = document.getElementById("modalDepartment");
const modalCode = document.getElementById("modalCode");
const modalTitle = document.getElementById("modalTitle");
const modalCredit = document.getElementById("modalCredit");
const modalPrerequisite = document.getElementById("modalPrerequisite");

function normalize(text) {
  return (text || "").replace(/\s+/g, "").toUpperCase();
}

/* ✅ GLOBAL HELPER (IMPORTANT FOR CLICK NAVIGATION) */
function getCourseByCode(code) {
  return courses.find(c =>
    normalize(c.code) === normalize(code)
  );
}

function showModal(course) {

  /* ✅ Department */
  modalDepartment.textContent =
    `${course.department} Department`;

  /* ✅ Main Info */
  modalCode.textContent = course.code;
  modalTitle.textContent = course.title;
  modalCredit.textContent = course.credit;

  const prereq = course.prerequisite;

  /* ✅ Prerequisite */
  if (!prereq || prereq.toLowerCase() === "none") {

    modalPrerequisite.textContent = "None";

  } else {

    const parts = prereq.split(",");

    modalPrerequisite.innerHTML = parts.map(p => {

      const code = normalize(p.trim());

      const match = getCourseByCode(code);

      if (match) {

        return `
          <div style="margin-top:8px;">
            <span
              class="prereq-link"
              style="
                cursor:pointer;
                color:#7c4dff;
                font-weight:700;
              "
              onclick="showModal(getCourseByCode('${match.code}'))"
            >
              ${match.code}
            </span>

            — ${match.title}
          </div>
        `;
      }

      return `<div>${p.trim()}</div>`;

    }).join("");
  }

  modalOverlay.classList.add("active");
}

function closeModal() {
  modalOverlay.classList.remove("active");
}

function searchCourse() {

  const query = normalize(searchInput.value);

  const found = courses.find(course =>
    normalize(course.code) === query
  );

  if (found) {

    showModal(found);

  } else {

    liveResults.innerHTML = `
      <div class="live-item">
        <div class="live-code">
          Course Not Found
        </div>

        <div class="live-title">
          No matching course for ${searchInput.value}
        </div>
      </div>
    `;
  }
}

function liveSearch() {

  const query = normalize(searchInput.value);

  liveResults.innerHTML = "";

  if (!query) return;

  const matches = courses.filter(course =>

    normalize(course.code).includes(query) ||

    course.title.toUpperCase().includes(query)
  );

  if (matches.length === 0) {

    liveResults.innerHTML = `
      <div class="live-item">
        <div class="live-code">
          No Results Found
        </div>
      </div>
    `;

    return;
  }

  matches.forEach(course => {

    const div = document.createElement("div");

    div.className = "live-item";

    div.innerHTML = `
      <div class="live-code">
        ${course.code}
      </div>

      <div class="live-title">
        ${course.title}
      </div>
    `;

    div.addEventListener("click", () => {
      showModal(course);
    });

    liveResults.appendChild(div);
  });
}

searchBtn.addEventListener("click", searchCourse);

searchInput.addEventListener("input", liveSearch);

searchInput.addEventListener("keypress", (e) => {

  if (e.key === "Enter") {
    searchCourse();
  }
});

modalOverlay.addEventListener("click", (e) => {

  if (e.target === modalOverlay) {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {

  if (e.key === "Escape") {
    closeModal();
  }
});
