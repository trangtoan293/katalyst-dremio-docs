/*
 * Copyright (C) 2017-2019 Dremio Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.dremio.dac.resource;

import static javax.ws.rs.core.MediaType.APPLICATION_JSON;

import com.dremio.dac.annotations.APIResource;
import com.dremio.dac.annotations.Secured;
import com.dremio.dac.model.diff.DataDiffResponse;
import com.dremio.dac.model.diff.DiffResponse;
import com.dremio.dac.model.diff.ImmutableDataDiffResponse;
import com.dremio.dac.model.diff.ImmutableDiffResponse;
import com.dremio.dac.model.diff.ImmutableSchemaDiffResponse;
import com.dremio.dac.model.diff.SchemaDiffResponse;
import com.dremio.exec.catalog.CatalogService;
import com.dremio.service.namespace.NamespaceService;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.security.RolesAllowed;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

/** Resource for computing diff between dataset versions. */
@APIResource
@Secured
@RolesAllowed({"user", "admin"})
@Path("/catalog/{datasetId}/diff")
@Produces(APPLICATION_JSON)
public class CatalogDiffResource {
  private final NamespaceService namespaceService;
  private final CatalogService catalogService;

  @Inject
  public CatalogDiffResource(NamespaceService namespaceService, CatalogService catalogService) {
    this.namespaceService = namespaceService;
    this.catalogService = catalogService;
  }

  @GET
  public DiffResponse getDiff(
      @PathParam("datasetId") String datasetId,
      @QueryParam("from") String fromHash,
      @QueryParam("to") String toHash) {
    // Placeholder: actual implementation resolves dataset, gets Iceberg table
    // at fromHash and toHash via Nessie time-travel, compares schemas
    List<SchemaDiffResponse.ColumnChange> changes = new ArrayList<>();

    return ImmutableDiffResponse.builder()
        .fromHash(fromHash)
        .toHash(toHash)
        .schemaDiff(ImmutableSchemaDiffResponse.builder()
            .hasChanges(false)
            .changes(changes)
            .build())
        .dataDiff(ImmutableDataDiffResponse.builder()
            .hasChanges(false)
            .totalRowsChanged(0)
            .sampleRows(List.of())
            .build())
        .build();
  }
}
