import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CoursesInfo from "./pages/CoursesInfo";

import CurriculumReact from "./pages/CurriculumReact";
import CurriculumAngular from "./pages/CurriculumAngular";
import CurriculumJava from "./pages/CurriculumJava";
import CurriculumFullStackJava from "./pages/CurriculumFullStackJava";
import CurriculumSQL from "./pages/CurriculumSQL";
import CurriculumFullStackPython from "./pages/CurriculumFullStackPython";
import CurriculamAIML from "./pages/CurriculamAIML";   // ✅ NEW IMPORT

import WhatsappFloat from "./pages/WhatsappFloat";

function App() {
  return (
    <BrowserRouter>
      <WhatsappFloat />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursesInfo />} />

        <Route path="/curriculum/react" element={<CurriculumReact />} />
        <Route path="/curriculum/angular" element={<CurriculumAngular />} />
        <Route path="/curriculum/java" element={<CurriculumJava />} />

        <Route
          path="/curriculum/fullstack-java"
          element={<CurriculumFullStackJava />}
        />

        <Route
          path="/curriculum/fullstack-python"
          element={<CurriculumFullStackPython />}
        />

        <Route path="/curriculum/sql" element={<CurriculumSQL />} />

        {/* ✅ NEW AI/ML Route */}
        <Route path="/curriculum/aiml" element={<CurriculamAIML />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
