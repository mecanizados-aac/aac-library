import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShowcaseAacExampleComponent } from "./showcase/showcase-aac-example/showcase-aac-example.component";
import { ShowcaseAacPipeJoinComponent } from "./showcase/showcase-aac-pipe-join/showcase-aac-pipe-join.component";

const routes: Routes = [
    { path: 'aac-example', component: ShowcaseAacExampleComponent },
    { path: 'aac-join', component: ShowcaseAacPipeJoinComponent },
]


@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {}