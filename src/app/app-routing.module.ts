import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingPage } from "./pages/landing/landing.page";
import { TrainerPage } from "./pages/trainer/trainer.page";


const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "/login"
    },
    {
        path: "login",
        component: LandingPage
    },
    {
        path: "trainer",
        component: TrainerPage,
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}