#pragma checksum "C:\Users\Dell\Documents\RecodePro2021\Asp_NET\Filmes\Views\Filme\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "192e28f8bffdf3dcafd9d06d80b4d017b71b3c96"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Filme_Index), @"mvc.1.0.view", @"/Views/Filme/Index.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "C:\Users\Dell\Documents\RecodePro2021\Asp_NET\Filmes\Views\_ViewImports.cshtml"
using Filmes;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\Dell\Documents\RecodePro2021\Asp_NET\Filmes\Views\_ViewImports.cshtml"
using Filmes.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"192e28f8bffdf3dcafd9d06d80b4d017b71b3c96", @"/Views/Filme/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"e8a190c67c531022c499b44db76b37b5c89f3879", @"/Views/_ViewImports.cshtml")]
    public class Views_Filme_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<IEnumerable<Filmes.Models.Filme>>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 2 "C:\Users\Dell\Documents\RecodePro2021\Asp_NET\Filmes\Views\Filme\Index.cshtml"
  
    ViewData["Title"] = "Filmes da Netflix";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n<h1>Lista De Filmes</h1>\r\n\r\n\r\n<table class=\"table\">\r\n    <thead>\r\n        <tr>\r\n            <th scope=\"col\">omar</th>\r\n            <th scope=\"col\">");
#nullable restore
#line 13 "C:\Users\Dell\Documents\RecodePro2021\Asp_NET\Filmes\Views\Filme\Index.cshtml"
                       Write(Html.DisplayNameFor(m => m.Nome));

#line default
#line hidden
#nullable disable
            WriteLiteral("</th>\r\n            <th scope=\"col\">");
#nullable restore
#line 14 "C:\Users\Dell\Documents\RecodePro2021\Asp_NET\Filmes\Views\Filme\Index.cshtml"
                       Write(Html.DisplayNameFor(m => m.Genero));

#line default
#line hidden
#nullable disable
            WriteLiteral("</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n");
#nullable restore
#line 18 "C:\Users\Dell\Documents\RecodePro2021\Asp_NET\Filmes\Views\Filme\Index.cshtml"
         foreach (var item in Model)
        {

#line default
#line hidden
#nullable disable
            WriteLiteral("            <tr>\r\n                <th scope=\"row\">");
#nullable restore
#line 21 "C:\Users\Dell\Documents\RecodePro2021\Asp_NET\Filmes\Views\Filme\Index.cshtml"
                           Write(item.Id);

#line default
#line hidden
#nullable disable
            WriteLiteral("</th>\r\n                <td>");
#nullable restore
#line 22 "C:\Users\Dell\Documents\RecodePro2021\Asp_NET\Filmes\Views\Filme\Index.cshtml"
               Write(item.Nome);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                <td>");
#nullable restore
#line 23 "C:\Users\Dell\Documents\RecodePro2021\Asp_NET\Filmes\Views\Filme\Index.cshtml"
               Write(item.Genero);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n            </tr>\r\n");
#nullable restore
#line 25 "C:\Users\Dell\Documents\RecodePro2021\Asp_NET\Filmes\Views\Filme\Index.cshtml"
        }

#line default
#line hidden
#nullable disable
            WriteLiteral("        \r\n    </tbody>\r\n</table>");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<IEnumerable<Filmes.Models.Filme>> Html { get; private set; }
    }
}
#pragma warning restore 1591
