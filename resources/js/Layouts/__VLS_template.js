import { Head, Link } from '@inertiajs/vue3';
import ApplicationMark from '@/Components/ApplicationMark.vue';
import Banner from '@/Components/Banner.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name, __VLS_slots, switchToTeam, logout, showingNavigationDropdown } from './AppLayout.vue';

export function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'Head', typeof __VLS_localComponents, "Head", "Head", "Head"> &
__VLS_WithComponent<'Banner', typeof __VLS_localComponents, "Banner", "Banner", "Banner"> &
__VLS_WithComponent<'Link', typeof __VLS_localComponents, "Link", "Link", "Link"> &
__VLS_WithComponent<'ApplicationMark', typeof __VLS_localComponents, "ApplicationMark", "ApplicationMark", "ApplicationMark"> &
__VLS_WithComponent<'NavLink', typeof __VLS_localComponents, "NavLink", "NavLink", "NavLink"> &
__VLS_WithComponent<'Dropdown', typeof __VLS_localComponents, "Dropdown", "Dropdown", "Dropdown"> &
__VLS_WithComponent<'DropdownLink', typeof __VLS_localComponents, "DropdownLink", "DropdownLink", "DropdownLink"> &
__VLS_WithComponent<'ResponsiveNavLink', typeof __VLS_localComponents, "ResponsiveNavLink", "ResponsiveNavLink", "ResponsiveNavLink">;
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_components.Head;
// @ts-ignore
[Head,];
__VLS_components.Banner;
// @ts-ignore
[Banner,];
__VLS_intrinsicElements.nav; __VLS_intrinsicElements.nav;
__VLS_components.Link; __VLS_components.Link;
// @ts-ignore
[Link, Link,];
__VLS_components.ApplicationMark;
// @ts-ignore
[ApplicationMark,];
__VLS_components.NavLink; __VLS_components.NavLink; __VLS_components.NavLink; __VLS_components.NavLink; __VLS_components.NavLink; __VLS_components.NavLink;
// @ts-ignore
[NavLink, NavLink, NavLink, NavLink, NavLink, NavLink,];
__VLS_components.Dropdown; __VLS_components.Dropdown; __VLS_components.Dropdown; __VLS_components.Dropdown;
// @ts-ignore
[Dropdown, Dropdown, Dropdown, Dropdown,];
__VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template;
__VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span;
__VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button;
__VLS_intrinsicElements.svg; __VLS_intrinsicElements.svg; __VLS_intrinsicElements.svg; __VLS_intrinsicElements.svg; __VLS_intrinsicElements.svg; __VLS_intrinsicElements.svg; __VLS_intrinsicElements.svg; __VLS_intrinsicElements.svg; __VLS_intrinsicElements.svg; __VLS_intrinsicElements.svg;
__VLS_intrinsicElements.path; __VLS_intrinsicElements.path; __VLS_intrinsicElements.path; __VLS_intrinsicElements.path; __VLS_intrinsicElements.path; __VLS_intrinsicElements.path;
__VLS_components.DropdownLink; __VLS_components.DropdownLink; __VLS_components.DropdownLink; __VLS_components.DropdownLink; __VLS_components.DropdownLink; __VLS_components.DropdownLink; __VLS_components.DropdownLink; __VLS_components.DropdownLink; __VLS_components.DropdownLink; __VLS_components.DropdownLink; __VLS_components.DropdownLink; __VLS_components.DropdownLink;
// @ts-ignore
[DropdownLink, DropdownLink, DropdownLink, DropdownLink, DropdownLink, DropdownLink, DropdownLink, DropdownLink, DropdownLink, DropdownLink, DropdownLink, DropdownLink,];
__VLS_intrinsicElements.form; __VLS_intrinsicElements.form; __VLS_intrinsicElements.form; __VLS_intrinsicElements.form; __VLS_intrinsicElements.form; __VLS_intrinsicElements.form; __VLS_intrinsicElements.form; __VLS_intrinsicElements.form;
__VLS_intrinsicElements.img; __VLS_intrinsicElements.img;
__VLS_components.ResponsiveNavLink; __VLS_components.ResponsiveNavLink; __VLS_components.ResponsiveNavLink; __VLS_components.ResponsiveNavLink; __VLS_components.ResponsiveNavLink; __VLS_components.ResponsiveNavLink; __VLS_components.ResponsiveNavLink; __VLS_components.ResponsiveNavLink; __VLS_components.ResponsiveNavLink; __VLS_components.ResponsiveNavLink; __VLS_components.ResponsiveNavLink; __VLS_components.ResponsiveNavLink; __VLS_components.ResponsiveNavLink; __VLS_components.ResponsiveNavLink;
// @ts-ignore
[ResponsiveNavLink, ResponsiveNavLink, ResponsiveNavLink, ResponsiveNavLink, ResponsiveNavLink, ResponsiveNavLink, ResponsiveNavLink, ResponsiveNavLink, ResponsiveNavLink, ResponsiveNavLink, ResponsiveNavLink, ResponsiveNavLink, ResponsiveNavLink, ResponsiveNavLink,];
__VLS_intrinsicElements.header; __VLS_intrinsicElements.header;
__VLS_intrinsicElements.main; __VLS_intrinsicElements.main;
{
const __VLS_0 = __VLS_intrinsicElements["div"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = ({} as 'Head' extends keyof typeof __VLS_ctx ? { 'Head': typeof __VLS_ctx.Head; } : typeof __VLS_resolvedLocalAndGlobalComponents).Head;
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, title: ((__VLS_ctx.title)), }));
({} as { Head: typeof __VLS_5; }).Head;
const __VLS_7 = __VLS_6({ ...{}, title: ((__VLS_ctx.title)), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, title: ((__VLS_ctx.title)), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
}
{
const __VLS_10 = ({} as 'Banner' extends keyof typeof __VLS_ctx ? { 'Banner': typeof __VLS_ctx.Banner; } : typeof __VLS_resolvedLocalAndGlobalComponents).Banner;
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, }));
({} as { Banner: typeof __VLS_10; }).Banner;
const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
}
{
const __VLS_15 = __VLS_intrinsicElements["div"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
const __VLS_17 = __VLS_16({ ...{}, class: ("min-h-screen bg-gray-100 dark:bg-gray-900"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, class: ("min-h-screen bg-gray-100 dark:bg-gray-900"), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
{
const __VLS_20 = __VLS_intrinsicElements["nav"];
const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
const __VLS_22 = __VLS_21({ ...{}, class: ("bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, class: ("bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700"), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
{
const __VLS_25 = __VLS_intrinsicElements["div"];
const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
const __VLS_27 = __VLS_26({ ...{}, class: ("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, class: ("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"), });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
{
const __VLS_30 = __VLS_intrinsicElements["div"];
const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
const __VLS_32 = __VLS_31({ ...{}, class: ("flex justify-between h-16"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{}, class: ("flex justify-between h-16"), });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
{
const __VLS_35 = __VLS_intrinsicElements["div"];
const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
const __VLS_37 = __VLS_36({ ...{}, class: ("flex"), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_35, typeof __VLS_37> & Record<string, unknown>) => void)({ ...{}, class: ("flex"), });
const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37)!;
let __VLS_39!: __VLS_NormalizeEmits<typeof __VLS_38.emit>;
{
const __VLS_40 = __VLS_intrinsicElements["div"];
const __VLS_41 = __VLS_elementAsFunctionalComponent(__VLS_40);
const __VLS_42 = __VLS_41({ ...{}, class: ("shrink-0 flex items-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_40, typeof __VLS_42> & Record<string, unknown>) => void)({ ...{}, class: ("shrink-0 flex items-center"), });
const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42)!;
let __VLS_44!: __VLS_NormalizeEmits<typeof __VLS_43.emit>;
{
const __VLS_45 = ({} as 'Link' extends keyof typeof __VLS_ctx ? { 'Link': typeof __VLS_ctx.Link; } : typeof __VLS_resolvedLocalAndGlobalComponents).Link;
const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({ ...{}, href: ((__VLS_ctx.route('dashboard'))), }));
({} as { Link: typeof __VLS_45; }).Link;
({} as { Link: typeof __VLS_45; }).Link;
const __VLS_47 = __VLS_46({ ...{}, href: ((__VLS_ctx.route('dashboard'))), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_45, typeof __VLS_47> & Record<string, unknown>) => void)({ ...{}, href: ((__VLS_ctx.route('dashboard'))), });
const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47)!;
let __VLS_49!: __VLS_NormalizeEmits<typeof __VLS_48.emit>;
{
const __VLS_50 = ({} as 'ApplicationMark' extends keyof typeof __VLS_ctx ? { 'ApplicationMark': typeof __VLS_ctx.ApplicationMark; } : typeof __VLS_resolvedLocalAndGlobalComponents).ApplicationMark;
const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ ...{}, class: ("block h-9 w-auto"), }));
({} as { ApplicationMark: typeof __VLS_50; }).ApplicationMark;
const __VLS_52 = __VLS_51({ ...{}, class: ("block h-9 w-auto"), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_50, typeof __VLS_52> & Record<string, unknown>) => void)({ ...{}, class: ("block h-9 w-auto"), });
const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52)!;
let __VLS_54!: __VLS_NormalizeEmits<typeof __VLS_53.emit>;
}
(__VLS_48.slots!).default;
}
(__VLS_43.slots!).default;
}
{
const __VLS_55 = __VLS_intrinsicElements["div"];
const __VLS_56 = __VLS_elementAsFunctionalComponent(__VLS_55);
const __VLS_57 = __VLS_56({ ...{}, class: ("hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"), }, ...__VLS_functionalComponentArgsRest(__VLS_56));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_55, typeof __VLS_57> & Record<string, unknown>) => void)({ ...{}, class: ("hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"), });
const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57)!;
let __VLS_59!: __VLS_NormalizeEmits<typeof __VLS_58.emit>;
{
const __VLS_60 = ({} as 'NavLink' extends keyof typeof __VLS_ctx ? { 'NavLink': typeof __VLS_ctx.NavLink; } : typeof __VLS_resolvedLocalAndGlobalComponents).NavLink;
const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ ...{}, href: ((__VLS_ctx.route('dashboard'))), active: ((__VLS_ctx.route().current('dashboard'))), }));
({} as { NavLink: typeof __VLS_60; }).NavLink;
({} as { NavLink: typeof __VLS_60; }).NavLink;
const __VLS_62 = __VLS_61({ ...{}, href: ((__VLS_ctx.route('dashboard'))), active: ((__VLS_ctx.route().current('dashboard'))), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_60, typeof __VLS_62> & Record<string, unknown>) => void)({ ...{}, href: ((__VLS_ctx.route('dashboard'))), active: ((__VLS_ctx.route().current('dashboard'))), });
const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62)!;
let __VLS_64!: __VLS_NormalizeEmits<typeof __VLS_63.emit>;
(__VLS_63.slots!).default;
}
(__VLS_58.slots!).default;
}
if (__VLS_ctx.$page.props.user.permissions.includes('read categories') >
<NavLink__VLS_ctx.__VLS_ctx href __VLS_ctx {...{
const: __VLS_65 = __VLS_intrinsicElements["div"],
const: __VLS_66 = __VLS_elementAsFunctionalComponent(__VLS_65),
const: __VLS_67 = __VLS_66({
...{}, class: ("hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"), "route('categories.index')": ": (true), active: ((__VLS_ctx.route().current('categories.*'))), }, ...__VLS_functionalComponentArgsRest(__VLS_66));"({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_65, typeof __VLS_67> & Record<string, unknown>) => void)({
...{}, class: ("hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"), "route('categories.index')": ": (true), active: ((__VLS_ctx.route().current('categories.*'))), });",
const: __VLS_68 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67)!,
let, __VLS_69: __VLS_NormalizeEmits < typeof __VLS_68.emit >  }(__VLS_68.slots!).default)
}
// @ts-ignore
[title, title, title, route, route, route, route, route, route, route, route, route, $page, , href, , route, route, ])
}}
{...}
const __VLS_70 __VLS_intrinsicElements />) ["div"];
const __VLS_71 = __VLS_elementAsFunctionalComponent(__VLS_70);
const __VLS_72 = __VLS_71({ ...{}, class: ("hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"), }, ...__VLS_functionalComponentArgsRest(__VLS_71));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_70, typeof __VLS_72> & Record<string, unknown>) => void)({ ...{}, class: ("hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"), });
const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72)!;
let __VLS_74!: __VLS_NormalizeEmits<typeof __VLS_73.emit>;
{
const __VLS_75 = ({} as 'NavLink' extends keyof typeof __VLS_ctx ? { 'NavLink': typeof __VLS_ctx.NavLink; } : typeof __VLS_resolvedLocalAndGlobalComponents).NavLink;
const __VLS_76 = __VLS_asFunctionalComponent(__VLS_75, new __VLS_75({ ...{}, href: ((__VLS_ctx.route('dashboard'))), active: ((__VLS_ctx.route().current('dashboard'))), }));
({} as { NavLink: typeof __VLS_75; }).NavLink;
({} as { NavLink: typeof __VLS_75; }).NavLink;
const __VLS_77 = __VLS_76({ ...{}, href: ((__VLS_ctx.route('dashboard'))), active: ((__VLS_ctx.route().current('dashboard'))), }, ...__VLS_functionalComponentArgsRest(__VLS_76));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_75, typeof __VLS_77> & Record<string, unknown>) => void)({ ...{}, href: ((__VLS_ctx.route('dashboard'))), active: ((__VLS_ctx.route().current('dashboard'))), });
const __VLS_78 = __VLS_pickFunctionalComponentCtx(__VLS_75, __VLS_77)!;
let __VLS_79!: __VLS_NormalizeEmits<typeof __VLS_78.emit>;
(__VLS_78.slots!).default;
}
(__VLS_73.slots!).default;
}
{
const __VLS_80 = __VLS_intrinsicElements["div"];
const __VLS_81 = __VLS_elementAsFunctionalComponent(__VLS_80);
const __VLS_82 = __VLS_81({ ...{}, class: ("hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_80, typeof __VLS_82> & Record<string, unknown>) => void)({ ...{}, class: ("hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"), });
const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82)!;
let __VLS_84!: __VLS_NormalizeEmits<typeof __VLS_83.emit>;
{
const __VLS_85 = ({} as 'NavLink' extends keyof typeof __VLS_ctx ? { 'NavLink': typeof __VLS_ctx.NavLink; } : typeof __VLS_resolvedLocalAndGlobalComponents).NavLink;
const __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, new __VLS_85({ ...{}, href: ((__VLS_ctx.route('dashboard'))), active: ((__VLS_ctx.route().current('dashboard'))), }));
({} as { NavLink: typeof __VLS_85; }).NavLink;
({} as { NavLink: typeof __VLS_85; }).NavLink;
const __VLS_87 = __VLS_86({ ...{}, href: ((__VLS_ctx.route('dashboard'))), active: ((__VLS_ctx.route().current('dashboard'))), }, ...__VLS_functionalComponentArgsRest(__VLS_86));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_85, typeof __VLS_87> & Record<string, unknown>) => void)({ ...{}, href: ((__VLS_ctx.route('dashboard'))), active: ((__VLS_ctx.route().current('dashboard'))), });
const __VLS_88 = __VLS_pickFunctionalComponentCtx(__VLS_85, __VLS_87)!;
let __VLS_89!: __VLS_NormalizeEmits<typeof __VLS_88.emit>;
(__VLS_88.slots!).default;
}
(__VLS_83.slots!).default;
}
(__VLS_38.slots!).default;
}
{
const __VLS_90 = __VLS_intrinsicElements["div"];
const __VLS_91 = __VLS_elementAsFunctionalComponent(__VLS_90);
const __VLS_92 = __VLS_91({ ...{}, class: ("hidden sm:flex sm:items-center sm:ms-6"), }, ...__VLS_functionalComponentArgsRest(__VLS_91));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_90, typeof __VLS_92> & Record<string, unknown>) => void)({ ...{}, class: ("hidden sm:flex sm:items-center sm:ms-6"), });
const __VLS_93 = __VLS_pickFunctionalComponentCtx(__VLS_90, __VLS_92)!;
let __VLS_94!: __VLS_NormalizeEmits<typeof __VLS_93.emit>;
{
const __VLS_95 = __VLS_intrinsicElements["div"];
const __VLS_96 = __VLS_elementAsFunctionalComponent(__VLS_95);
const __VLS_97 = __VLS_96({ ...{}, class: ("ms-3 relative"), }, ...__VLS_functionalComponentArgsRest(__VLS_96));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_95, typeof __VLS_97> & Record<string, unknown>) => void)({ ...{}, class: ("ms-3 relative"), });
const __VLS_98 = __VLS_pickFunctionalComponentCtx(__VLS_95, __VLS_97)!;
let __VLS_99!: __VLS_NormalizeEmits<typeof __VLS_98.emit>;
if (__VLS_ctx.$page.props.jetstream.hasTeamFeatures) {
{
const __VLS_100 = ({} as 'Dropdown' extends keyof typeof __VLS_ctx ? { 'Dropdown': typeof __VLS_ctx.Dropdown; } : typeof __VLS_resolvedLocalAndGlobalComponents).Dropdown;
const __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100({ ...{}, align: ("right"), width: ("60"), }));
({} as { Dropdown: typeof __VLS_100; }).Dropdown;
({} as { Dropdown: typeof __VLS_100; }).Dropdown;
const __VLS_102 = __VLS_101({ ...{}, align: ("right"), width: ("60"), }, ...__VLS_functionalComponentArgsRest(__VLS_101));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_100, typeof __VLS_102> & Record<string, unknown>) => void)({ ...{}, align: ("right"), width: ("60"), });
const __VLS_103 = __VLS_pickFunctionalComponentCtx(__VLS_100, __VLS_102)!;
let __VLS_104!: __VLS_NormalizeEmits<typeof __VLS_103.emit>;
{
const __VLS_105 = __VLS_intrinsicElements["template"];
const __VLS_106 = __VLS_elementAsFunctionalComponent(__VLS_105);
const __VLS_107 = __VLS_106({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_106));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_105, typeof __VLS_107> & Record<string, unknown>) => void)({ ...{}, });
{
(__VLS_103.slots!).trigger;
{
const __VLS_108 = __VLS_intrinsicElements["span"];
const __VLS_109 = __VLS_elementAsFunctionalComponent(__VLS_108);
const __VLS_110 = __VLS_109({ ...{}, class: ("inline-flex rounded-md"), }, ...__VLS_functionalComponentArgsRest(__VLS_109));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_108, typeof __VLS_110> & Record<string, unknown>) => void)({ ...{}, class: ("inline-flex rounded-md"), });
const __VLS_111 = __VLS_pickFunctionalComponentCtx(__VLS_108, __VLS_110)!;
let __VLS_112!: __VLS_NormalizeEmits<typeof __VLS_111.emit>;
{
const __VLS_113 = __VLS_intrinsicElements["button"];
const __VLS_114 = __VLS_elementAsFunctionalComponent(__VLS_113);
const __VLS_115 = __VLS_114({ ...{}, type: ("button"), class: ("inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50 dark:active:bg-gray-700 transition ease-in-out duration-150"), }, ...__VLS_functionalComponentArgsRest(__VLS_114));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_113, typeof __VLS_115> & Record<string, unknown>) => void)({ ...{}, type: ("button"), class: ("inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50 dark:active:bg-gray-700 transition ease-in-out duration-150"), });
const __VLS_116 = __VLS_pickFunctionalComponentCtx(__VLS_113, __VLS_115)!;
let __VLS_117!: __VLS_NormalizeEmits<typeof __VLS_116.emit>;
(__VLS_ctx.$page.props.auth.user.current_team.name);
{
const __VLS_118 = __VLS_intrinsicElements["svg"];
const __VLS_119 = __VLS_elementAsFunctionalComponent(__VLS_118);
const __VLS_120 = __VLS_119({ ...{}, class: ("ms-2 -me-0.5 h-4 w-4"), xmlns: ("http://www.w3.org/2000/svg"), fill: ("none"), viewBox: ("0 0 24 24"), "stroke-width": ("1.5"), stroke: ("currentColor"), }, ...__VLS_functionalComponentArgsRest(__VLS_119));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_118, typeof __VLS_120> & Record<string, unknown>) => void)({ ...{}, class: ("ms-2 -me-0.5 h-4 w-4"), xmlns: ("http://www.w3.org/2000/svg"), fill: ("none"), viewBox: ("0 0 24 24"), "stroke-width": ("1.5"), stroke: ("currentColor"), });
const __VLS_121 = __VLS_pickFunctionalComponentCtx(__VLS_118, __VLS_120)!;
let __VLS_122!: __VLS_NormalizeEmits<typeof __VLS_121.emit>;
{
const __VLS_123 = __VLS_intrinsicElements["path"];
const __VLS_124 = __VLS_elementAsFunctionalComponent(__VLS_123);
const __VLS_125 = __VLS_124({ ...{}, "stroke-linecap": ("round"), "stroke-linejoin": ("round"), d: ("M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"), }, ...__VLS_functionalComponentArgsRest(__VLS_124));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_123, typeof __VLS_125> & Record<string, unknown>) => void)({ ...{}, "stroke-linecap": ("round"), "stroke-linejoin": ("round"), d: ("M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"), });
const __VLS_126 = __VLS_pickFunctionalComponentCtx(__VLS_123, __VLS_125)!;
let __VLS_127!: __VLS_NormalizeEmits<typeof __VLS_126.emit>;
}
(__VLS_121.slots!).default;
}
(__VLS_116.slots!).default;
}
(__VLS_111.slots!).default;
}
// @ts-ignore
[route, route, route, route, route, route, route, route, route, route, route, route, $page, $page,];
}
}
{
const __VLS_128 = __VLS_intrinsicElements["template"];
const __VLS_129 = __VLS_elementAsFunctionalComponent(__VLS_128);
const __VLS_130 = __VLS_129({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_129));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_128, typeof __VLS_130> & Record<string, unknown>) => void)({ ...{}, });
{
(__VLS_103.slots!).content;
{
const __VLS_131 = __VLS_intrinsicElements["div"];
const __VLS_132 = __VLS_elementAsFunctionalComponent(__VLS_131);
const __VLS_133 = __VLS_132({ ...{}, class: ("w-60"), }, ...__VLS_functionalComponentArgsRest(__VLS_132));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_131, typeof __VLS_133> & Record<string, unknown>) => void)({ ...{}, class: ("w-60"), });
const __VLS_134 = __VLS_pickFunctionalComponentCtx(__VLS_131, __VLS_133)!;
let __VLS_135!: __VLS_NormalizeEmits<typeof __VLS_134.emit>;
{
const __VLS_136 = __VLS_intrinsicElements["div"];
const __VLS_137 = __VLS_elementAsFunctionalComponent(__VLS_136);
const __VLS_138 = __VLS_137({ ...{}, class: ("block px-4 py-2 text-xs text-gray-400"), }, ...__VLS_functionalComponentArgsRest(__VLS_137));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_136, typeof __VLS_138> & Record<string, unknown>) => void)({ ...{}, class: ("block px-4 py-2 text-xs text-gray-400"), });
const __VLS_139 = __VLS_pickFunctionalComponentCtx(__VLS_136, __VLS_138)!;
let __VLS_140!: __VLS_NormalizeEmits<typeof __VLS_139.emit>;
(__VLS_139.slots!).default;
}
{
const __VLS_141 = ({} as 'DropdownLink' extends keyof typeof __VLS_ctx ? { 'DropdownLink': typeof __VLS_ctx.DropdownLink; } : typeof __VLS_resolvedLocalAndGlobalComponents).DropdownLink;
const __VLS_142 = __VLS_asFunctionalComponent(__VLS_141, new __VLS_141({ ...{}, href: ((__VLS_ctx.route('teams.show', __VLS_ctx.$page.props.auth.user.current_team))), }));
({} as { DropdownLink: typeof __VLS_141; }).DropdownLink;
({} as { DropdownLink: typeof __VLS_141; }).DropdownLink;
const __VLS_143 = __VLS_142({ ...{}, href: ((__VLS_ctx.route('teams.show', __VLS_ctx.$page.props.auth.user.current_team))), }, ...__VLS_functionalComponentArgsRest(__VLS_142));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_141, typeof __VLS_143> & Record<string, unknown>) => void)({ ...{}, href: ((__VLS_ctx.route('teams.show', __VLS_ctx.$page.props.auth.user.current_team))), });
const __VLS_144 = __VLS_pickFunctionalComponentCtx(__VLS_141, __VLS_143)!;
let __VLS_145!: __VLS_NormalizeEmits<typeof __VLS_144.emit>;
(__VLS_144.slots!).default;
}
if (__VLS_ctx.$page.props.jetstream.canCreateTeams) {
{
const __VLS_146 = ({} as 'DropdownLink' extends keyof typeof __VLS_ctx ? { 'DropdownLink': typeof __VLS_ctx.DropdownLink; } : typeof __VLS_resolvedLocalAndGlobalComponents).DropdownLink;
const __VLS_147 = __VLS_asFunctionalComponent(__VLS_146, new __VLS_146({ ...{}, href: ((__VLS_ctx.route('teams.create'))), }));
({} as { DropdownLink: typeof __VLS_146; }).DropdownLink;
({} as { DropdownLink: typeof __VLS_146; }).DropdownLink;
const __VLS_148 = __VLS_147({ ...{}, href: ((__VLS_ctx.route('teams.create'))), }, ...__VLS_functionalComponentArgsRest(__VLS_147));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_146, typeof __VLS_148> & Record<string, unknown>) => void)({ ...{}, href: ((__VLS_ctx.route('teams.create'))), });
const __VLS_149 = __VLS_pickFunctionalComponentCtx(__VLS_146, __VLS_148)!;
let __VLS_150!: __VLS_NormalizeEmits<typeof __VLS_149.emit>;
(__VLS_149.slots!).default;
}
// @ts-ignore
[route, $page, route, $page, route, $page, $page, route, route, route,];
}
if (__VLS_ctx.$page.props.auth.user.all_teams.length > 1) {
{
const __VLS_151 = __VLS_intrinsicElements["div"];
const __VLS_152 = __VLS_elementAsFunctionalComponent(__VLS_151);
const __VLS_153 = __VLS_152({ ...{}, class: ("border-t border-gray-200 dark:border-gray-600"), }, ...__VLS_functionalComponentArgsRest(__VLS_152));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_151, typeof __VLS_153> & Record<string, unknown>) => void)({ ...{}, class: ("border-t border-gray-200 dark:border-gray-600"), });
const __VLS_154 = __VLS_pickFunctionalComponentCtx(__VLS_151, __VLS_153)!;
let __VLS_155!: __VLS_NormalizeEmits<typeof __VLS_154.emit>;
}
{
const __VLS_156 = __VLS_intrinsicElements["div"];
const __VLS_157 = __VLS_elementAsFunctionalComponent(__VLS_156);
const __VLS_158 = __VLS_157({ ...{}, class: ("block px-4 py-2 text-xs text-gray-400"), }, ...__VLS_functionalComponentArgsRest(__VLS_157));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_156, typeof __VLS_158> & Record<string, unknown>) => void)({ ...{}, class: ("block px-4 py-2 text-xs text-gray-400"), });
const __VLS_159 = __VLS_pickFunctionalComponentCtx(__VLS_156, __VLS_158)!;
let __VLS_160!: __VLS_NormalizeEmits<typeof __VLS_159.emit>;
(__VLS_159.slots!).default;
}
for (const [team] of __VLS_getVForSourceType((__VLS_ctx.$page.props.auth.user.all_teams)!)) {
{
const __VLS_161 = __VLS_intrinsicElements["form"];
const __VLS_162 = __VLS_elementAsFunctionalComponent(__VLS_161);
const __VLS_163 = __VLS_162({ ...{ onSubmit: {} as any, }, }, ...__VLS_functionalComponentArgsRest(__VLS_162));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_161, typeof __VLS_163> & Record<string, unknown>) => void)({ ...{ onSubmit: {} as any, }, });
const __VLS_164 = __VLS_pickFunctionalComponentCtx(__VLS_161, __VLS_163)!;
let __VLS_165!: __VLS_NormalizeEmits<typeof __VLS_164.emit>;
let __VLS_166 = { 'submit': __VLS_pickEvent(__VLS_165['submit'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_162, typeof __VLS_163>).onSubmit) };
__VLS_166 = {
submit: $event => {
if (!((__VLS_ctx.$page.props.jetstream.hasTeamFeatures))) return;
if (!((__VLS_ctx.$page.props.auth.user.all_teams.length > 1))) return;
__VLS_ctx.switchToTeam(team);
// @ts-ignore
[$page, $page, switchToTeam,];
}
};
{
const __VLS_167 = ({} as 'DropdownLink' extends keyof typeof __VLS_ctx ? { 'DropdownLink': typeof __VLS_ctx.DropdownLink; } : typeof __VLS_resolvedLocalAndGlobalComponents).DropdownLink;
const __VLS_168 = __VLS_asFunctionalComponent(__VLS_167, new __VLS_167({ ...{}, as: ("button"), }));
({} as { DropdownLink: typeof __VLS_167; }).DropdownLink;
({} as { DropdownLink: typeof __VLS_167; }).DropdownLink;
const __VLS_169 = __VLS_168({ ...{}, as: ("button"), }, ...__VLS_functionalComponentArgsRest(__VLS_168));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_167, typeof __VLS_169> & Record<string, unknown>) => void)({ ...{}, as: ("button"), });
const __VLS_170 = __VLS_pickFunctionalComponentCtx(__VLS_167, __VLS_169)!;
let __VLS_171!: __VLS_NormalizeEmits<typeof __VLS_170.emit>;
{
const __VLS_172 = __VLS_intrinsicElements["div"];
const __VLS_173 = __VLS_elementAsFunctionalComponent(__VLS_172);
const __VLS_174 = __VLS_173({ ...{}, class: ("flex items-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_173));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_172, typeof __VLS_174> & Record<string, unknown>) => void)({ ...{}, class: ("flex items-center"), });
const __VLS_175 = __VLS_pickFunctionalComponentCtx(__VLS_172, __VLS_174)!;
let __VLS_176!: __VLS_NormalizeEmits<typeof __VLS_175.emit>;
if (team.id == __VLS_ctx.$page.props.auth.user.current_team_id) {
{
const __VLS_177 = __VLS_intrinsicElements["svg"];
const __VLS_178 = __VLS_elementAsFunctionalComponent(__VLS_177);
const __VLS_179 = __VLS_178({ ...{}, class: ("me-2 h-5 w-5 text-green-400"), xmlns: ("http://www.w3.org/2000/svg"), fill: ("none"), viewBox: ("0 0 24 24"), "stroke-width": ("1.5"), stroke: ("currentColor"), }, ...__VLS_functionalComponentArgsRest(__VLS_178));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_177, typeof __VLS_179> & Record<string, unknown>) => void)({ ...{}, class: ("me-2 h-5 w-5 text-green-400"), xmlns: ("http://www.w3.org/2000/svg"), fill: ("none"), viewBox: ("0 0 24 24"), "stroke-width": ("1.5"), stroke: ("currentColor"), });
const __VLS_180 = __VLS_pickFunctionalComponentCtx(__VLS_177, __VLS_179)!;
let __VLS_181!: __VLS_NormalizeEmits<typeof __VLS_180.emit>;
{
const __VLS_182 = __VLS_intrinsicElements["path"];
const __VLS_183 = __VLS_elementAsFunctionalComponent(__VLS_182);
const __VLS_184 = __VLS_183({ ...{}, "stroke-linecap": ("round"), "stroke-linejoin": ("round"), d: ("M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"), }, ...__VLS_functionalComponentArgsRest(__VLS_183));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_182, typeof __VLS_184> & Record<string, unknown>) => void)({ ...{}, "stroke-linecap": ("round"), "stroke-linejoin": ("round"), d: ("M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"), });
const __VLS_185 = __VLS_pickFunctionalComponentCtx(__VLS_182, __VLS_184)!;
let __VLS_186!: __VLS_NormalizeEmits<typeof __VLS_185.emit>;
}
(__VLS_180.slots!).default;
}
// @ts-ignore
[$page,];
}
{
const __VLS_187 = __VLS_intrinsicElements["div"];
const __VLS_188 = __VLS_elementAsFunctionalComponent(__VLS_187);
const __VLS_189 = __VLS_188({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_188));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_187, typeof __VLS_189> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_190 = __VLS_pickFunctionalComponentCtx(__VLS_187, __VLS_189)!;
let __VLS_191!: __VLS_NormalizeEmits<typeof __VLS_190.emit>;
(team.name);
(__VLS_190.slots!).default;
}
(__VLS_175.slots!).default;
}
(__VLS_170.slots!).default;
}
(__VLS_164.slots!).default;
}
}
}
(__VLS_134.slots!).default;
}
}
}
}
}
(__VLS_98.slots!).default;
}
{
const __VLS_192 = __VLS_intrinsicElements["div"];
const __VLS_193 = __VLS_elementAsFunctionalComponent(__VLS_192);
const __VLS_194 = __VLS_193({ ...{}, class: ("ms-3 relative"), }, ...__VLS_functionalComponentArgsRest(__VLS_193));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_192, typeof __VLS_194> & Record<string, unknown>) => void)({ ...{}, class: ("ms-3 relative"), });
const __VLS_195 = __VLS_pickFunctionalComponentCtx(__VLS_192, __VLS_194)!;
let __VLS_196!: __VLS_NormalizeEmits<typeof __VLS_195.emit>;
{
const __VLS_197 = ({} as 'Dropdown' extends keyof typeof __VLS_ctx ? { 'Dropdown': typeof __VLS_ctx.Dropdown; } : typeof __VLS_resolvedLocalAndGlobalComponents).Dropdown;
const __VLS_198 = __VLS_asFunctionalComponent(__VLS_197, new __VLS_197({ ...{}, align: ("right"), width: ("48"), }));
({} as { Dropdown: typeof __VLS_197; }).Dropdown;
({} as { Dropdown: typeof __VLS_197; }).Dropdown;
const __VLS_199 = __VLS_198({ ...{}, align: ("right"), width: ("48"), }, ...__VLS_functionalComponentArgsRest(__VLS_198));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_197, typeof __VLS_199> & Record<string, unknown>) => void)({ ...{}, align: ("right"), width: ("48"), });
const __VLS_200 = __VLS_pickFunctionalComponentCtx(__VLS_197, __VLS_199)!;
let __VLS_201!: __VLS_NormalizeEmits<typeof __VLS_200.emit>;
{
const __VLS_202 = __VLS_intrinsicElements["template"];
const __VLS_203 = __VLS_elementAsFunctionalComponent(__VLS_202);
const __VLS_204 = __VLS_203({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_203));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_202, typeof __VLS_204> & Record<string, unknown>) => void)({ ...{}, });
{
(__VLS_200.slots!).trigger;
if (__VLS_ctx.$page.props.jetstream.managesProfilePhotos) {
{
const __VLS_205 = __VLS_intrinsicElements["button"];
const __VLS_206 = __VLS_elementAsFunctionalComponent(__VLS_205);
const __VLS_207 = __VLS_206({ ...{}, class: ("flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"), }, ...__VLS_functionalComponentArgsRest(__VLS_206));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_205, typeof __VLS_207> & Record<string, unknown>) => void)({ ...{}, class: ("flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"), });
const __VLS_208 = __VLS_pickFunctionalComponentCtx(__VLS_205, __VLS_207)!;
let __VLS_209!: __VLS_NormalizeEmits<typeof __VLS_208.emit>;
{
const __VLS_210 = __VLS_intrinsicElements["img"];
const __VLS_211 = __VLS_elementAsFunctionalComponent(__VLS_210);
const __VLS_212 = __VLS_211({ ...{}, class: ("h-8 w-8 rounded-full object-cover"), src: ((__VLS_ctx.$page.props.auth.user.profile_photo_url)), alt: ((__VLS_ctx.$page.props.auth.user.name)), }, ...__VLS_functionalComponentArgsRest(__VLS_211));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_210, typeof __VLS_212> & Record<string, unknown>) => void)({ ...{}, class: ("h-8 w-8 rounded-full object-cover"), src: ((__VLS_ctx.$page.props.auth.user.profile_photo_url)), alt: ((__VLS_ctx.$page.props.auth.user.name)), });
const __VLS_213 = __VLS_pickFunctionalComponentCtx(__VLS_210, __VLS_212)!;
let __VLS_214!: __VLS_NormalizeEmits<typeof __VLS_213.emit>;
}
(__VLS_208.slots!).default;
}
// @ts-ignore
[$page, $page, $page, $page, $page,];
}
else {
{
const __VLS_215 = __VLS_intrinsicElements["span"];
const __VLS_216 = __VLS_elementAsFunctionalComponent(__VLS_215);
const __VLS_217 = __VLS_216({ ...{}, class: ("inline-flex rounded-md"), }, ...__VLS_functionalComponentArgsRest(__VLS_216));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_215, typeof __VLS_217> & Record<string, unknown>) => void)({ ...{}, class: ("inline-flex rounded-md"), });
const __VLS_218 = __VLS_pickFunctionalComponentCtx(__VLS_215, __VLS_217)!;
let __VLS_219!: __VLS_NormalizeEmits<typeof __VLS_218.emit>;
{
const __VLS_220 = __VLS_intrinsicElements["button"];
const __VLS_221 = __VLS_elementAsFunctionalComponent(__VLS_220);
const __VLS_222 = __VLS_221({ ...{}, type: ("button"), class: ("inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50 dark:active:bg-gray-700 transition ease-in-out duration-150"), }, ...__VLS_functionalComponentArgsRest(__VLS_221));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_220, typeof __VLS_222> & Record<string, unknown>) => void)({ ...{}, type: ("button"), class: ("inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50 dark:active:bg-gray-700 transition ease-in-out duration-150"), });
const __VLS_223 = __VLS_pickFunctionalComponentCtx(__VLS_220, __VLS_222)!;
let __VLS_224!: __VLS_NormalizeEmits<typeof __VLS_223.emit>;
(__VLS_ctx.$page.props.auth.user.name);
{
const __VLS_225 = __VLS_intrinsicElements["svg"];
const __VLS_226 = __VLS_elementAsFunctionalComponent(__VLS_225);
const __VLS_227 = __VLS_226({ ...{}, class: ("ms-2 -me-0.5 h-4 w-4"), xmlns: ("http://www.w3.org/2000/svg"), fill: ("none"), viewBox: ("0 0 24 24"), "stroke-width": ("1.5"), stroke: ("currentColor"), }, ...__VLS_functionalComponentArgsRest(__VLS_226));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_225, typeof __VLS_227> & Record<string, unknown>) => void)({ ...{}, class: ("ms-2 -me-0.5 h-4 w-4"), xmlns: ("http://www.w3.org/2000/svg"), fill: ("none"), viewBox: ("0 0 24 24"), "stroke-width": ("1.5"), stroke: ("currentColor"), });
const __VLS_228 = __VLS_pickFunctionalComponentCtx(__VLS_225, __VLS_227)!;
let __VLS_229!: __VLS_NormalizeEmits<typeof __VLS_228.emit>;
{
const __VLS_230 = __VLS_intrinsicElements["path"];
const __VLS_231 = __VLS_elementAsFunctionalComponent(__VLS_230);
const __VLS_232 = __VLS_231({ ...{}, "stroke-linecap": ("round"), "stroke-linejoin": ("round"), d: ("M19.5 8.25l-7.5 7.5-7.5-7.5"), }, ...__VLS_functionalComponentArgsRest(__VLS_231));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_230, typeof __VLS_232> & Record<string, unknown>) => void)({ ...{}, "stroke-linecap": ("round"), "stroke-linejoin": ("round"), d: ("M19.5 8.25l-7.5 7.5-7.5-7.5"), });
const __VLS_233 = __VLS_pickFunctionalComponentCtx(__VLS_230, __VLS_232)!;
let __VLS_234!: __VLS_NormalizeEmits<typeof __VLS_233.emit>;
}
(__VLS_228.slots!).default;
}
(__VLS_223.slots!).default;
}
(__VLS_218.slots!).default;
}
// @ts-ignore
[$page,];
}
}
}
{
const __VLS_235 = __VLS_intrinsicElements["template"];
const __VLS_236 = __VLS_elementAsFunctionalComponent(__VLS_235);
const __VLS_237 = __VLS_236({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_236));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_235, typeof __VLS_237> & Record<string, unknown>) => void)({ ...{}, });
{
(__VLS_200.slots!).content;
{
const __VLS_238 = __VLS_intrinsicElements["div"];
const __VLS_239 = __VLS_elementAsFunctionalComponent(__VLS_238);
const __VLS_240 = __VLS_239({ ...{}, class: ("block px-4 py-2 text-xs text-gray-400"), }, ...__VLS_functionalComponentArgsRest(__VLS_239));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_238, typeof __VLS_240> & Record<string, unknown>) => void)({ ...{}, class: ("block px-4 py-2 text-xs text-gray-400"), });
const __VLS_241 = __VLS_pickFunctionalComponentCtx(__VLS_238, __VLS_240)!;
let __VLS_242!: __VLS_NormalizeEmits<typeof __VLS_241.emit>;
(__VLS_241.slots!).default;
}
{
const __VLS_243 = ({} as 'DropdownLink' extends keyof typeof __VLS_ctx ? { 'DropdownLink': typeof __VLS_ctx.DropdownLink; } : typeof __VLS_resolvedLocalAndGlobalComponents).DropdownLink;
const __VLS_244 = __VLS_asFunctionalComponent(__VLS_243, new __VLS_243({ ...{}, href: ((__VLS_ctx.route('profile.show'))), }));
({} as { DropdownLink: typeof __VLS_243; }).DropdownLink;
({} as { DropdownLink: typeof __VLS_243; }).DropdownLink;
const __VLS_245 = __VLS_244({ ...{}, href: ((__VLS_ctx.route('profile.show'))), }, ...__VLS_functionalComponentArgsRest(__VLS_244));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_243, typeof __VLS_245> & Record<string, unknown>) => void)({ ...{}, href: ((__VLS_ctx.route('profile.show'))), });
const __VLS_246 = __VLS_pickFunctionalComponentCtx(__VLS_243, __VLS_245)!;
let __VLS_247!: __VLS_NormalizeEmits<typeof __VLS_246.emit>;
(__VLS_246.slots!).default;
}
if (__VLS_ctx.$page.props.jetstream.hasApiFeatures) {
{
const __VLS_248 = ({} as 'DropdownLink' extends keyof typeof __VLS_ctx ? { 'DropdownLink': typeof __VLS_ctx.DropdownLink; } : typeof __VLS_resolvedLocalAndGlobalComponents).DropdownLink;
const __VLS_249 = __VLS_asFunctionalComponent(__VLS_248, new __VLS_248({ ...{}, href: ((__VLS_ctx.route('api-tokens.index'))), }));
({} as { DropdownLink: typeof __VLS_248; }).DropdownLink;
({} as { DropdownLink: typeof __VLS_248; }).DropdownLink;
const __VLS_250 = __VLS_249({ ...{}, href: ((__VLS_ctx.route('api-tokens.index'))), }, ...__VLS_functionalComponentArgsRest(__VLS_249));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_248, typeof __VLS_250> & Record<string, unknown>) => void)({ ...{}, href: ((__VLS_ctx.route('api-tokens.index'))), });
const __VLS_251 = __VLS_pickFunctionalComponentCtx(__VLS_248, __VLS_250)!;
let __VLS_252!: __VLS_NormalizeEmits<typeof __VLS_251.emit>;
(__VLS_251.slots!).default;
}
// @ts-ignore
[route, route, route, $page, route, route, route,];
}
{
const __VLS_253 = __VLS_intrinsicElements["div"];
const __VLS_254 = __VLS_elementAsFunctionalComponent(__VLS_253);
const __VLS_255 = __VLS_254({ ...{}, class: ("border-t border-gray-200 dark:border-gray-600"), }, ...__VLS_functionalComponentArgsRest(__VLS_254));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_253, typeof __VLS_255> & Record<string, unknown>) => void)({ ...{}, class: ("border-t border-gray-200 dark:border-gray-600"), });
const __VLS_256 = __VLS_pickFunctionalComponentCtx(__VLS_253, __VLS_255)!;
let __VLS_257!: __VLS_NormalizeEmits<typeof __VLS_256.emit>;
}
{
const __VLS_258 = __VLS_intrinsicElements["form"];
const __VLS_259 = __VLS_elementAsFunctionalComponent(__VLS_258);
const __VLS_260 = __VLS_259({ ...{ onSubmit: {} as any, }, }, ...__VLS_functionalComponentArgsRest(__VLS_259));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_258, typeof __VLS_260> & Record<string, unknown>) => void)({ ...{ onSubmit: {} as any, }, });
const __VLS_261 = __VLS_pickFunctionalComponentCtx(__VLS_258, __VLS_260)!;
let __VLS_262!: __VLS_NormalizeEmits<typeof __VLS_261.emit>;
let __VLS_263 = { 'submit': __VLS_pickEvent(__VLS_262['submit'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_259, typeof __VLS_260>).onSubmit) };
__VLS_263 = { submit: (__VLS_ctx.logout) };
{
const __VLS_264 = ({} as 'DropdownLink' extends keyof typeof __VLS_ctx ? { 'DropdownLink': typeof __VLS_ctx.DropdownLink; } : typeof __VLS_resolvedLocalAndGlobalComponents).DropdownLink;
const __VLS_265 = __VLS_asFunctionalComponent(__VLS_264, new __VLS_264({ ...{}, as: ("button"), }));
({} as { DropdownLink: typeof __VLS_264; }).DropdownLink;
({} as { DropdownLink: typeof __VLS_264; }).DropdownLink;
const __VLS_266 = __VLS_265({ ...{}, as: ("button"), }, ...__VLS_functionalComponentArgsRest(__VLS_265));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_264, typeof __VLS_266> & Record<string, unknown>) => void)({ ...{}, as: ("button"), });
const __VLS_267 = __VLS_pickFunctionalComponentCtx(__VLS_264, __VLS_266)!;
let __VLS_268!: __VLS_NormalizeEmits<typeof __VLS_267.emit>;
(__VLS_267.slots!).default;
}
(__VLS_261.slots!).default;
}
// @ts-ignore
[logout,];
}
}
}
(__VLS_195.slots!).default;
}
(__VLS_93.slots!).default;
}
{
const __VLS_269 = __VLS_intrinsicElements["div"];
const __VLS_270 = __VLS_elementAsFunctionalComponent(__VLS_269);
const __VLS_271 = __VLS_270({ ...{}, class: ("-me-2 flex items-center sm:hidden"), }, ...__VLS_functionalComponentArgsRest(__VLS_270));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_269, typeof __VLS_271> & Record<string, unknown>) => void)({ ...{}, class: ("-me-2 flex items-center sm:hidden"), });
const __VLS_272 = __VLS_pickFunctionalComponentCtx(__VLS_269, __VLS_271)!;
let __VLS_273!: __VLS_NormalizeEmits<typeof __VLS_272.emit>;
{
const __VLS_274 = __VLS_intrinsicElements["button"];
const __VLS_275 = __VLS_elementAsFunctionalComponent(__VLS_274);
const __VLS_276 = __VLS_275({ ...{ onClick: {} as any, }, class: ("inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out"), }, ...__VLS_functionalComponentArgsRest(__VLS_275));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_274, typeof __VLS_276> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out"), });
const __VLS_277 = __VLS_pickFunctionalComponentCtx(__VLS_274, __VLS_276)!;
let __VLS_278!: __VLS_NormalizeEmits<typeof __VLS_277.emit>;
let __VLS_279 = { 'click': __VLS_pickEvent(__VLS_278['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_275, typeof __VLS_276>).onClick) };
__VLS_279 = {
click: $event => {
__VLS_ctx.showingNavigationDropdown = !__VLS_ctx.showingNavigationDropdown;
// @ts-ignore
[showingNavigationDropdown, showingNavigationDropdown,];
}
};
{
const __VLS_280 = __VLS_intrinsicElements["svg"];
const __VLS_281 = __VLS_elementAsFunctionalComponent(__VLS_280);
const __VLS_282 = __VLS_281({ ...{}, class: ("h-6 w-6"), stroke: ("currentColor"), fill: ("none"), viewBox: ("0 0 24 24"), }, ...__VLS_functionalComponentArgsRest(__VLS_281));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_280, typeof __VLS_282> & Record<string, unknown>) => void)({ ...{}, class: ("h-6 w-6"), stroke: ("currentColor"), fill: ("none"), viewBox: ("0 0 24 24"), });
const __VLS_283 = __VLS_pickFunctionalComponentCtx(__VLS_280, __VLS_282)!;
let __VLS_284!: __VLS_NormalizeEmits<typeof __VLS_283.emit>;
{
const __VLS_285 = __VLS_intrinsicElements["path"];
const __VLS_286 = __VLS_elementAsFunctionalComponent(__VLS_285);
const __VLS_287 = __VLS_286({ ...{}, class: (({ 'hidden': __VLS_ctx.showingNavigationDropdown, 'inline-flex': !__VLS_ctx.showingNavigationDropdown })), "stroke-linecap": ("round"), "stroke-linejoin": ("round"), "stroke-width": ("2"), d: ("M4 6h16M4 12h16M4 18h16"), }, ...__VLS_functionalComponentArgsRest(__VLS_286));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_285, typeof __VLS_287> & Record<string, unknown>) => void)({ ...{}, class: (({ 'hidden': __VLS_ctx.showingNavigationDropdown, 'inline-flex': !__VLS_ctx.showingNavigationDropdown })), "stroke-linecap": ("round"), "stroke-linejoin": ("round"), "stroke-width": ("2"), d: ("M4 6h16M4 12h16M4 18h16"), });
const __VLS_288 = __VLS_pickFunctionalComponentCtx(__VLS_285, __VLS_287)!;
let __VLS_289!: __VLS_NormalizeEmits<typeof __VLS_288.emit>;
}
{
const __VLS_290 = __VLS_intrinsicElements["path"];
const __VLS_291 = __VLS_elementAsFunctionalComponent(__VLS_290);
const __VLS_292 = __VLS_291({ ...{}, class: (({ 'hidden': !__VLS_ctx.showingNavigationDropdown, 'inline-flex': __VLS_ctx.showingNavigationDropdown })), "stroke-linecap": ("round"), "stroke-linejoin": ("round"), "stroke-width": ("2"), d: ("M6 18L18 6M6 6l12 12"), }, ...__VLS_functionalComponentArgsRest(__VLS_291));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_290, typeof __VLS_292> & Record<string, unknown>) => void)({ ...{}, class: (({ 'hidden': !__VLS_ctx.showingNavigationDropdown, 'inline-flex': __VLS_ctx.showingNavigationDropdown })), "stroke-linecap": ("round"), "stroke-linejoin": ("round"), "stroke-width": ("2"), d: ("M6 18L18 6M6 6l12 12"), });
const __VLS_293 = __VLS_pickFunctionalComponentCtx(__VLS_290, __VLS_292)!;
let __VLS_294!: __VLS_NormalizeEmits<typeof __VLS_293.emit>;
}
(__VLS_283.slots!).default;
}
(__VLS_277.slots!).default;
}
(__VLS_272.slots!).default;
}
(__VLS_33.slots!).default;
}
(__VLS_28.slots!).default;
}
{
const __VLS_295 = __VLS_intrinsicElements["div"];
const __VLS_296 = __VLS_elementAsFunctionalComponent(__VLS_295);
const __VLS_297 = __VLS_296({ ...{}, class: (({ 'block': __VLS_ctx.showingNavigationDropdown, 'hidden': !__VLS_ctx.showingNavigationDropdown })), }, ...__VLS_functionalComponentArgsRest(__VLS_296));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_295, typeof __VLS_297> & Record<string, unknown>) => void)({ ...{}, class: (({ 'block': __VLS_ctx.showingNavigationDropdown, 'hidden': !__VLS_ctx.showingNavigationDropdown })), });
const __VLS_298 = __VLS_pickFunctionalComponentCtx(__VLS_295, __VLS_297)!;
let __VLS_299!: __VLS_NormalizeEmits<typeof __VLS_298.emit>;
{
const __VLS_300 = __VLS_intrinsicElements["div"];
const __VLS_301 = __VLS_elementAsFunctionalComponent(__VLS_300);
const __VLS_302 = __VLS_301({ ...{}, class: ("pt-2 pb-3 space-y-1"), }, ...__VLS_functionalComponentArgsRest(__VLS_301));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_300, typeof __VLS_302> & Record<string, unknown>) => void)({ ...{}, class: ("pt-2 pb-3 space-y-1"), });
const __VLS_303 = __VLS_pickFunctionalComponentCtx(__VLS_300, __VLS_302)!;
let __VLS_304!: __VLS_NormalizeEmits<typeof __VLS_303.emit>;
{
const __VLS_305 = ({} as 'ResponsiveNavLink' extends keyof typeof __VLS_ctx ? { 'ResponsiveNavLink': typeof __VLS_ctx.ResponsiveNavLink; } : typeof __VLS_resolvedLocalAndGlobalComponents).ResponsiveNavLink;
const __VLS_306 = __VLS_asFunctionalComponent(__VLS_305, new __VLS_305({ ...{}, href: ((__VLS_ctx.route('dashboard'))), active: ((__VLS_ctx.route().current('dashboard'))), }));
({} as { ResponsiveNavLink: typeof __VLS_305; }).ResponsiveNavLink;
({} as { ResponsiveNavLink: typeof __VLS_305; }).ResponsiveNavLink;
const __VLS_307 = __VLS_306({ ...{}, href: ((__VLS_ctx.route('dashboard'))), active: ((__VLS_ctx.route().current('dashboard'))), }, ...__VLS_functionalComponentArgsRest(__VLS_306));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_305, typeof __VLS_307> & Record<string, unknown>) => void)({ ...{}, href: ((__VLS_ctx.route('dashboard'))), active: ((__VLS_ctx.route().current('dashboard'))), });
const __VLS_308 = __VLS_pickFunctionalComponentCtx(__VLS_305, __VLS_307)!;
let __VLS_309!: __VLS_NormalizeEmits<typeof __VLS_308.emit>;
(__VLS_308.slots!).default;
}
(__VLS_303.slots!).default;
}
{
const __VLS_310 = __VLS_intrinsicElements["div"];
const __VLS_311 = __VLS_elementAsFunctionalComponent(__VLS_310);
const __VLS_312 = __VLS_311({ ...{}, class: ("pt-4 pb-1 border-t border-gray-200 dark:border-gray-600"), }, ...__VLS_functionalComponentArgsRest(__VLS_311));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_310, typeof __VLS_312> & Record<string, unknown>) => void)({ ...{}, class: ("pt-4 pb-1 border-t border-gray-200 dark:border-gray-600"), });
const __VLS_313 = __VLS_pickFunctionalComponentCtx(__VLS_310, __VLS_312)!;
let __VLS_314!: __VLS_NormalizeEmits<typeof __VLS_313.emit>;
{
const __VLS_315 = __VLS_intrinsicElements["div"];
const __VLS_316 = __VLS_elementAsFunctionalComponent(__VLS_315);
const __VLS_317 = __VLS_316({ ...{}, class: ("flex items-center px-4"), }, ...__VLS_functionalComponentArgsRest(__VLS_316));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_315, typeof __VLS_317> & Record<string, unknown>) => void)({ ...{}, class: ("flex items-center px-4"), });
const __VLS_318 = __VLS_pickFunctionalComponentCtx(__VLS_315, __VLS_317)!;
let __VLS_319!: __VLS_NormalizeEmits<typeof __VLS_318.emit>;
if (__VLS_ctx.$page.props.jetstream.managesProfilePhotos) {
{
const __VLS_320 = __VLS_intrinsicElements["div"];
const __VLS_321 = __VLS_elementAsFunctionalComponent(__VLS_320);
const __VLS_322 = __VLS_321({ ...{}, class: ("shrink-0 me-3"), }, ...__VLS_functionalComponentArgsRest(__VLS_321));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_320, typeof __VLS_322> & Record<string, unknown>) => void)({ ...{}, class: ("shrink-0 me-3"), });
const __VLS_323 = __VLS_pickFunctionalComponentCtx(__VLS_320, __VLS_322)!;
let __VLS_324!: __VLS_NormalizeEmits<typeof __VLS_323.emit>;
{
const __VLS_325 = __VLS_intrinsicElements["img"];
const __VLS_326 = __VLS_elementAsFunctionalComponent(__VLS_325);
const __VLS_327 = __VLS_326({ ...{}, class: ("h-10 w-10 rounded-full object-cover"), src: ((__VLS_ctx.$page.props.auth.user.profile_photo_url)), alt: ((__VLS_ctx.$page.props.auth.user.name)), }, ...__VLS_functionalComponentArgsRest(__VLS_326));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_325, typeof __VLS_327> & Record<string, unknown>) => void)({ ...{}, class: ("h-10 w-10 rounded-full object-cover"), src: ((__VLS_ctx.$page.props.auth.user.profile_photo_url)), alt: ((__VLS_ctx.$page.props.auth.user.name)), });
const __VLS_328 = __VLS_pickFunctionalComponentCtx(__VLS_325, __VLS_327)!;
let __VLS_329!: __VLS_NormalizeEmits<typeof __VLS_328.emit>;
}
(__VLS_323.slots!).default;
}
// @ts-ignore
[showingNavigationDropdown, showingNavigationDropdown, showingNavigationDropdown, showingNavigationDropdown, showingNavigationDropdown, showingNavigationDropdown, showingNavigationDropdown, showingNavigationDropdown, showingNavigationDropdown, showingNavigationDropdown, showingNavigationDropdown, showingNavigationDropdown, route, route, route, route, route, route, $page, $page, $page, $page, $page,];
}
{
const __VLS_330 = __VLS_intrinsicElements["div"];
const __VLS_331 = __VLS_elementAsFunctionalComponent(__VLS_330);
const __VLS_332 = __VLS_331({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_331));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_330, typeof __VLS_332> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_333 = __VLS_pickFunctionalComponentCtx(__VLS_330, __VLS_332)!;
let __VLS_334!: __VLS_NormalizeEmits<typeof __VLS_333.emit>;
{
const __VLS_335 = __VLS_intrinsicElements["div"];
const __VLS_336 = __VLS_elementAsFunctionalComponent(__VLS_335);
const __VLS_337 = __VLS_336({ ...{}, class: ("font-medium text-base text-gray-800 dark:text-gray-200"), }, ...__VLS_functionalComponentArgsRest(__VLS_336));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_335, typeof __VLS_337> & Record<string, unknown>) => void)({ ...{}, class: ("font-medium text-base text-gray-800 dark:text-gray-200"), });
const __VLS_338 = __VLS_pickFunctionalComponentCtx(__VLS_335, __VLS_337)!;
let __VLS_339!: __VLS_NormalizeEmits<typeof __VLS_338.emit>;
(__VLS_ctx.$page.props.auth.user.name);
(__VLS_338.slots!).default;
}
{
const __VLS_340 = __VLS_intrinsicElements["div"];
const __VLS_341 = __VLS_elementAsFunctionalComponent(__VLS_340);
const __VLS_342 = __VLS_341({ ...{}, class: ("font-medium text-sm text-gray-500"), }, ...__VLS_functionalComponentArgsRest(__VLS_341));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_340, typeof __VLS_342> & Record<string, unknown>) => void)({ ...{}, class: ("font-medium text-sm text-gray-500"), });
const __VLS_343 = __VLS_pickFunctionalComponentCtx(__VLS_340, __VLS_342)!;
let __VLS_344!: __VLS_NormalizeEmits<typeof __VLS_343.emit>;
(__VLS_ctx.$page.props.auth.user.email);
(__VLS_343.slots!).default;
}
(__VLS_333.slots!).default;
}
(__VLS_318.slots!).default;
}
{
const __VLS_345 = __VLS_intrinsicElements["div"];
const __VLS_346 = __VLS_elementAsFunctionalComponent(__VLS_345);
const __VLS_347 = __VLS_346({ ...{}, class: ("mt-3 space-y-1"), }, ...__VLS_functionalComponentArgsRest(__VLS_346));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_345, typeof __VLS_347> & Record<string, unknown>) => void)({ ...{}, class: ("mt-3 space-y-1"), });
const __VLS_348 = __VLS_pickFunctionalComponentCtx(__VLS_345, __VLS_347)!;
let __VLS_349!: __VLS_NormalizeEmits<typeof __VLS_348.emit>;
{
const __VLS_350 = ({} as 'ResponsiveNavLink' extends keyof typeof __VLS_ctx ? { 'ResponsiveNavLink': typeof __VLS_ctx.ResponsiveNavLink; } : typeof __VLS_resolvedLocalAndGlobalComponents).ResponsiveNavLink;
const __VLS_351 = __VLS_asFunctionalComponent(__VLS_350, new __VLS_350({ ...{}, href: ((__VLS_ctx.route('profile.show'))), active: ((__VLS_ctx.route().current('profile.show'))), }));
({} as { ResponsiveNavLink: typeof __VLS_350; }).ResponsiveNavLink;
({} as { ResponsiveNavLink: typeof __VLS_350; }).ResponsiveNavLink;
const __VLS_352 = __VLS_351({ ...{}, href: ((__VLS_ctx.route('profile.show'))), active: ((__VLS_ctx.route().current('profile.show'))), }, ...__VLS_functionalComponentArgsRest(__VLS_351));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_350, typeof __VLS_352> & Record<string, unknown>) => void)({ ...{}, href: ((__VLS_ctx.route('profile.show'))), active: ((__VLS_ctx.route().current('profile.show'))), });
const __VLS_353 = __VLS_pickFunctionalComponentCtx(__VLS_350, __VLS_352)!;
let __VLS_354!: __VLS_NormalizeEmits<typeof __VLS_353.emit>;
(__VLS_353.slots!).default;
}
if (__VLS_ctx.$page.props.jetstream.hasApiFeatures) {
{
const __VLS_355 = ({} as 'ResponsiveNavLink' extends keyof typeof __VLS_ctx ? { 'ResponsiveNavLink': typeof __VLS_ctx.ResponsiveNavLink; } : typeof __VLS_resolvedLocalAndGlobalComponents).ResponsiveNavLink;
const __VLS_356 = __VLS_asFunctionalComponent(__VLS_355, new __VLS_355({ ...{}, href: ((__VLS_ctx.route('api-tokens.index'))), active: ((__VLS_ctx.route().current('api-tokens.index'))), }));
({} as { ResponsiveNavLink: typeof __VLS_355; }).ResponsiveNavLink;
({} as { ResponsiveNavLink: typeof __VLS_355; }).ResponsiveNavLink;
const __VLS_357 = __VLS_356({ ...{}, href: ((__VLS_ctx.route('api-tokens.index'))), active: ((__VLS_ctx.route().current('api-tokens.index'))), }, ...__VLS_functionalComponentArgsRest(__VLS_356));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_355, typeof __VLS_357> & Record<string, unknown>) => void)({ ...{}, href: ((__VLS_ctx.route('api-tokens.index'))), active: ((__VLS_ctx.route().current('api-tokens.index'))), });
const __VLS_358 = __VLS_pickFunctionalComponentCtx(__VLS_355, __VLS_357)!;
let __VLS_359!: __VLS_NormalizeEmits<typeof __VLS_358.emit>;
(__VLS_358.slots!).default;
}
// @ts-ignore
[$page, $page, route, route, route, route, route, route, $page, route, route, route, route, route, route,];
}
{
const __VLS_360 = __VLS_intrinsicElements["form"];
const __VLS_361 = __VLS_elementAsFunctionalComponent(__VLS_360);
const __VLS_362 = __VLS_361({ ...{ onSubmit: {} as any, }, method: ("POST"), }, ...__VLS_functionalComponentArgsRest(__VLS_361));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_360, typeof __VLS_362> & Record<string, unknown>) => void)({ ...{ onSubmit: {} as any, }, method: ("POST"), });
const __VLS_363 = __VLS_pickFunctionalComponentCtx(__VLS_360, __VLS_362)!;
let __VLS_364!: __VLS_NormalizeEmits<typeof __VLS_363.emit>;
let __VLS_365 = { 'submit': __VLS_pickEvent(__VLS_364['submit'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_361, typeof __VLS_362>).onSubmit) };
__VLS_365 = { submit: (__VLS_ctx.logout) };
{
const __VLS_366 = ({} as 'ResponsiveNavLink' extends keyof typeof __VLS_ctx ? { 'ResponsiveNavLink': typeof __VLS_ctx.ResponsiveNavLink; } : typeof __VLS_resolvedLocalAndGlobalComponents).ResponsiveNavLink;
const __VLS_367 = __VLS_asFunctionalComponent(__VLS_366, new __VLS_366({ ...{}, as: ("button"), }));
({} as { ResponsiveNavLink: typeof __VLS_366; }).ResponsiveNavLink;
({} as { ResponsiveNavLink: typeof __VLS_366; }).ResponsiveNavLink;
const __VLS_368 = __VLS_367({ ...{}, as: ("button"), }, ...__VLS_functionalComponentArgsRest(__VLS_367));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_366, typeof __VLS_368> & Record<string, unknown>) => void)({ ...{}, as: ("button"), });
const __VLS_369 = __VLS_pickFunctionalComponentCtx(__VLS_366, __VLS_368)!;
let __VLS_370!: __VLS_NormalizeEmits<typeof __VLS_369.emit>;
(__VLS_369.slots!).default;
}
(__VLS_363.slots!).default;
}
if (__VLS_ctx.$page.props.jetstream.hasTeamFeatures) {
{
const __VLS_371 = __VLS_intrinsicElements["div"];
const __VLS_372 = __VLS_elementAsFunctionalComponent(__VLS_371);
const __VLS_373 = __VLS_372({ ...{}, class: ("border-t border-gray-200 dark:border-gray-600"), }, ...__VLS_functionalComponentArgsRest(__VLS_372));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_371, typeof __VLS_373> & Record<string, unknown>) => void)({ ...{}, class: ("border-t border-gray-200 dark:border-gray-600"), });
const __VLS_374 = __VLS_pickFunctionalComponentCtx(__VLS_371, __VLS_373)!;
let __VLS_375!: __VLS_NormalizeEmits<typeof __VLS_374.emit>;
}
{
const __VLS_376 = __VLS_intrinsicElements["div"];
const __VLS_377 = __VLS_elementAsFunctionalComponent(__VLS_376);
const __VLS_378 = __VLS_377({ ...{}, class: ("block px-4 py-2 text-xs text-gray-400"), }, ...__VLS_functionalComponentArgsRest(__VLS_377));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_376, typeof __VLS_378> & Record<string, unknown>) => void)({ ...{}, class: ("block px-4 py-2 text-xs text-gray-400"), });
const __VLS_379 = __VLS_pickFunctionalComponentCtx(__VLS_376, __VLS_378)!;
let __VLS_380!: __VLS_NormalizeEmits<typeof __VLS_379.emit>;
(__VLS_379.slots!).default;
}
{
const __VLS_381 = ({} as 'ResponsiveNavLink' extends keyof typeof __VLS_ctx ? { 'ResponsiveNavLink': typeof __VLS_ctx.ResponsiveNavLink; } : typeof __VLS_resolvedLocalAndGlobalComponents).ResponsiveNavLink;
const __VLS_382 = __VLS_asFunctionalComponent(__VLS_381, new __VLS_381({ ...{}, href: ((__VLS_ctx.route('teams.show', __VLS_ctx.$page.props.auth.user.current_team))), active: ((__VLS_ctx.route().current('teams.show'))), }));
({} as { ResponsiveNavLink: typeof __VLS_381; }).ResponsiveNavLink;
({} as { ResponsiveNavLink: typeof __VLS_381; }).ResponsiveNavLink;
const __VLS_383 = __VLS_382({ ...{}, href: ((__VLS_ctx.route('teams.show', __VLS_ctx.$page.props.auth.user.current_team))), active: ((__VLS_ctx.route().current('teams.show'))), }, ...__VLS_functionalComponentArgsRest(__VLS_382));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_381, typeof __VLS_383> & Record<string, unknown>) => void)({ ...{}, href: ((__VLS_ctx.route('teams.show', __VLS_ctx.$page.props.auth.user.current_team))), active: ((__VLS_ctx.route().current('teams.show'))), });
const __VLS_384 = __VLS_pickFunctionalComponentCtx(__VLS_381, __VLS_383)!;
let __VLS_385!: __VLS_NormalizeEmits<typeof __VLS_384.emit>;
(__VLS_384.slots!).default;
}
if (__VLS_ctx.$page.props.jetstream.canCreateTeams) {
{
const __VLS_386 = ({} as 'ResponsiveNavLink' extends keyof typeof __VLS_ctx ? { 'ResponsiveNavLink': typeof __VLS_ctx.ResponsiveNavLink; } : typeof __VLS_resolvedLocalAndGlobalComponents).ResponsiveNavLink;
const __VLS_387 = __VLS_asFunctionalComponent(__VLS_386, new __VLS_386({ ...{}, href: ((__VLS_ctx.route('teams.create'))), active: ((__VLS_ctx.route().current('teams.create'))), }));
({} as { ResponsiveNavLink: typeof __VLS_386; }).ResponsiveNavLink;
({} as { ResponsiveNavLink: typeof __VLS_386; }).ResponsiveNavLink;
const __VLS_388 = __VLS_387({ ...{}, href: ((__VLS_ctx.route('teams.create'))), active: ((__VLS_ctx.route().current('teams.create'))), }, ...__VLS_functionalComponentArgsRest(__VLS_387));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_386, typeof __VLS_388> & Record<string, unknown>) => void)({ ...{}, href: ((__VLS_ctx.route('teams.create'))), active: ((__VLS_ctx.route().current('teams.create'))), });
const __VLS_389 = __VLS_pickFunctionalComponentCtx(__VLS_386, __VLS_388)!;
let __VLS_390!: __VLS_NormalizeEmits<typeof __VLS_389.emit>;
(__VLS_389.slots!).default;
}
// @ts-ignore
[logout, $page, route, $page, route, route, $page, route, route, $page, route, $page, route, route, route, route, route, route,];
}
if (__VLS_ctx.$page.props.auth.user.all_teams.length > 1) {
{
const __VLS_391 = __VLS_intrinsicElements["div"];
const __VLS_392 = __VLS_elementAsFunctionalComponent(__VLS_391);
const __VLS_393 = __VLS_392({ ...{}, class: ("border-t border-gray-200 dark:border-gray-600"), }, ...__VLS_functionalComponentArgsRest(__VLS_392));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_391, typeof __VLS_393> & Record<string, unknown>) => void)({ ...{}, class: ("border-t border-gray-200 dark:border-gray-600"), });
const __VLS_394 = __VLS_pickFunctionalComponentCtx(__VLS_391, __VLS_393)!;
let __VLS_395!: __VLS_NormalizeEmits<typeof __VLS_394.emit>;
}
{
const __VLS_396 = __VLS_intrinsicElements["div"];
const __VLS_397 = __VLS_elementAsFunctionalComponent(__VLS_396);
const __VLS_398 = __VLS_397({ ...{}, class: ("block px-4 py-2 text-xs text-gray-400"), }, ...__VLS_functionalComponentArgsRest(__VLS_397));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_396, typeof __VLS_398> & Record<string, unknown>) => void)({ ...{}, class: ("block px-4 py-2 text-xs text-gray-400"), });
const __VLS_399 = __VLS_pickFunctionalComponentCtx(__VLS_396, __VLS_398)!;
let __VLS_400!: __VLS_NormalizeEmits<typeof __VLS_399.emit>;
(__VLS_399.slots!).default;
}
for (const [team] of __VLS_getVForSourceType((__VLS_ctx.$page.props.auth.user.all_teams)!)) {
{
const __VLS_401 = __VLS_intrinsicElements["form"];
const __VLS_402 = __VLS_elementAsFunctionalComponent(__VLS_401);
const __VLS_403 = __VLS_402({ ...{ onSubmit: {} as any, }, }, ...__VLS_functionalComponentArgsRest(__VLS_402));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_401, typeof __VLS_403> & Record<string, unknown>) => void)({ ...{ onSubmit: {} as any, }, });
const __VLS_404 = __VLS_pickFunctionalComponentCtx(__VLS_401, __VLS_403)!;
let __VLS_405!: __VLS_NormalizeEmits<typeof __VLS_404.emit>;
let __VLS_406 = { 'submit': __VLS_pickEvent(__VLS_405['submit'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_402, typeof __VLS_403>).onSubmit) };
__VLS_406 = {
submit: $event => {
if (!((__VLS_ctx.$page.props.jetstream.hasTeamFeatures))) return;
if (!((__VLS_ctx.$page.props.auth.user.all_teams.length > 1))) return;
__VLS_ctx.switchToTeam(team);
// @ts-ignore
[$page, $page, switchToTeam,];
}
};
{
const __VLS_407 = ({} as 'ResponsiveNavLink' extends keyof typeof __VLS_ctx ? { 'ResponsiveNavLink': typeof __VLS_ctx.ResponsiveNavLink; } : typeof __VLS_resolvedLocalAndGlobalComponents).ResponsiveNavLink;
const __VLS_408 = __VLS_asFunctionalComponent(__VLS_407, new __VLS_407({ ...{}, as: ("button"), }));
({} as { ResponsiveNavLink: typeof __VLS_407; }).ResponsiveNavLink;
({} as { ResponsiveNavLink: typeof __VLS_407; }).ResponsiveNavLink;
const __VLS_409 = __VLS_408({ ...{}, as: ("button"), }, ...__VLS_functionalComponentArgsRest(__VLS_408));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_407, typeof __VLS_409> & Record<string, unknown>) => void)({ ...{}, as: ("button"), });
const __VLS_410 = __VLS_pickFunctionalComponentCtx(__VLS_407, __VLS_409)!;
let __VLS_411!: __VLS_NormalizeEmits<typeof __VLS_410.emit>;
{
const __VLS_412 = __VLS_intrinsicElements["div"];
const __VLS_413 = __VLS_elementAsFunctionalComponent(__VLS_412);
const __VLS_414 = __VLS_413({ ...{}, class: ("flex items-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_413));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_412, typeof __VLS_414> & Record<string, unknown>) => void)({ ...{}, class: ("flex items-center"), });
const __VLS_415 = __VLS_pickFunctionalComponentCtx(__VLS_412, __VLS_414)!;
let __VLS_416!: __VLS_NormalizeEmits<typeof __VLS_415.emit>;
if (team.id == __VLS_ctx.$page.props.auth.user.current_team_id) {
{
const __VLS_417 = __VLS_intrinsicElements["svg"];
const __VLS_418 = __VLS_elementAsFunctionalComponent(__VLS_417);
const __VLS_419 = __VLS_418({ ...{}, class: ("me-2 h-5 w-5 text-green-400"), xmlns: ("http://www.w3.org/2000/svg"), fill: ("none"), viewBox: ("0 0 24 24"), "stroke-width": ("1.5"), stroke: ("currentColor"), }, ...__VLS_functionalComponentArgsRest(__VLS_418));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_417, typeof __VLS_419> & Record<string, unknown>) => void)({ ...{}, class: ("me-2 h-5 w-5 text-green-400"), xmlns: ("http://www.w3.org/2000/svg"), fill: ("none"), viewBox: ("0 0 24 24"), "stroke-width": ("1.5"), stroke: ("currentColor"), });
const __VLS_420 = __VLS_pickFunctionalComponentCtx(__VLS_417, __VLS_419)!;
let __VLS_421!: __VLS_NormalizeEmits<typeof __VLS_420.emit>;
{
const __VLS_422 = __VLS_intrinsicElements["path"];
const __VLS_423 = __VLS_elementAsFunctionalComponent(__VLS_422);
const __VLS_424 = __VLS_423({ ...{}, "stroke-linecap": ("round"), "stroke-linejoin": ("round"), d: ("M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"), }, ...__VLS_functionalComponentArgsRest(__VLS_423));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_422, typeof __VLS_424> & Record<string, unknown>) => void)({ ...{}, "stroke-linecap": ("round"), "stroke-linejoin": ("round"), d: ("M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"), });
const __VLS_425 = __VLS_pickFunctionalComponentCtx(__VLS_422, __VLS_424)!;
let __VLS_426!: __VLS_NormalizeEmits<typeof __VLS_425.emit>;
}
(__VLS_420.slots!).default;
}
// @ts-ignore
[$page,];
}
{
const __VLS_427 = __VLS_intrinsicElements["div"];
const __VLS_428 = __VLS_elementAsFunctionalComponent(__VLS_427);
const __VLS_429 = __VLS_428({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_428));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_427, typeof __VLS_429> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_430 = __VLS_pickFunctionalComponentCtx(__VLS_427, __VLS_429)!;
let __VLS_431!: __VLS_NormalizeEmits<typeof __VLS_430.emit>;
(team.name);
(__VLS_430.slots!).default;
}
(__VLS_415.slots!).default;
}
(__VLS_410.slots!).default;
}
(__VLS_404.slots!).default;
}
}
}
}
(__VLS_348.slots!).default;
}
(__VLS_313.slots!).default;
}
(__VLS_298.slots!).default;
}
(__VLS_23.slots!).default;
}
if (__VLS_ctx.$slots.header) {
{
const __VLS_432 = __VLS_intrinsicElements["header"];
const __VLS_433 = __VLS_elementAsFunctionalComponent(__VLS_432);
const __VLS_434 = __VLS_433({ ...{}, class: ("bg-white dark:bg-gray-800 shadow"), }, ...__VLS_functionalComponentArgsRest(__VLS_433));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_432, typeof __VLS_434> & Record<string, unknown>) => void)({ ...{}, class: ("bg-white dark:bg-gray-800 shadow"), });
const __VLS_435 = __VLS_pickFunctionalComponentCtx(__VLS_432, __VLS_434)!;
let __VLS_436!: __VLS_NormalizeEmits<typeof __VLS_435.emit>;
{
const __VLS_437 = __VLS_intrinsicElements["div"];
const __VLS_438 = __VLS_elementAsFunctionalComponent(__VLS_437);
const __VLS_439 = __VLS_438({ ...{}, class: ("max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"), }, ...__VLS_functionalComponentArgsRest(__VLS_438));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_437, typeof __VLS_439> & Record<string, unknown>) => void)({ ...{}, class: ("max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"), });
const __VLS_440 = __VLS_pickFunctionalComponentCtx(__VLS_437, __VLS_439)!;
let __VLS_441!: __VLS_NormalizeEmits<typeof __VLS_440.emit>;
{
const __VLS_442 = ({} as 'Slot' extends keyof typeof __VLS_ctx ? { 'slot': typeof __VLS_ctx.Slot; } : 'slot' extends keyof typeof __VLS_ctx ? { 'slot': typeof __VLS_ctx.slot; } : typeof __VLS_resolvedLocalAndGlobalComponents).slot;
const __VLS_443 = __VLS_asFunctionalComponent(__VLS_442, new __VLS_442({ ...{}, }));
const __VLS_444 = __VLS_443({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_443));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_442, typeof __VLS_444> & Record<string, unknown>) => void)({ ...{}, });
var __VLS_445 = {};
}
(__VLS_440.slots!).default;
}
(__VLS_435.slots!).default;
}
// @ts-ignore
[$slots,];
}
{
const __VLS_446 = __VLS_intrinsicElements["main"];
const __VLS_447 = __VLS_elementAsFunctionalComponent(__VLS_446);
const __VLS_448 = __VLS_447({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_447));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_446, typeof __VLS_448> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_449 = __VLS_pickFunctionalComponentCtx(__VLS_446, __VLS_448)!;
let __VLS_450!: __VLS_NormalizeEmits<typeof __VLS_449.emit>;
{
const __VLS_451 = ({} as 'Slot' extends keyof typeof __VLS_ctx ? { 'slot': typeof __VLS_ctx.Slot; } : 'slot' extends keyof typeof __VLS_ctx ? { 'slot': typeof __VLS_ctx.slot; } : typeof __VLS_resolvedLocalAndGlobalComponents).slot;
const __VLS_452 = __VLS_asFunctionalComponent(__VLS_451, new __VLS_451({ ...{}, }));
const __VLS_453 = __VLS_452({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_452));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_451, typeof __VLS_453> & Record<string, unknown>) => void)({ ...{}, });
var __VLS_454 = {};
}
(__VLS_449.slots!).default;
}
(__VLS_18.slots!).default;
}
(__VLS_3.slots!).default;
}
